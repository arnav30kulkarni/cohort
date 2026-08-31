type LogLevel = "Info" | "Warn" | "Error";

type LogMetadata = Record<string, unknown>;

export interface Env {
	DATABASE_URL?: string;
}

function normalizeLogLevel(value: unknown): LogLevel {
	if (value === "Warn" || value === "Error" || value === "Info") {
		return value;
	}

	return "Info";
}

async function writeLog(level: LogLevel, message: string, metadata: LogMetadata = {}, env?: Env) {
	const payload = {
		timestamp: new Date().toISOString(),
		level,
		message,
		metadata,
	};

	console.log(JSON.stringify(payload));

	if (!env?.DATABASE_URL) {
		return;
	}

	try {
		const { PrismaClient } = await import("@prisma/client");
		const { withAccelerate } = await import("@prisma/extension-accelerate");

		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		await prisma.log.create({
			data: {
				level,
				message,
				metadata,
			},
		});

		await prisma.$disconnect();
	} catch (error) {
		console.error("Failed to persist log entry:", error);
	}
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		const requestId = crypto.randomUUID();
		const metadata: LogMetadata = {
			requestId,
			method: request.method,
			url: url.href,
			userAgent: request.headers.get("user-agent") ?? undefined,
		};

		await writeLog("Info", "Request received", metadata, env);

		if (url.pathname === "/log") {
			let body: Record<string, unknown> = {};

			try {
				body = (await request.json()) as Record<string, unknown>;
			} catch {
				body = {};
			}

			const level = normalizeLogLevel(body.level ?? "Info");
			const message = typeof body.message === "string" ? body.message : "No message provided";
			const extraMetadata = typeof body.metadata === "object" && body.metadata !== null ? body.metadata : {};

			await writeLog(level, message, { ...extraMetadata, ...metadata }, env);

			return Response.json({
				ok: true,
				requestId,
				level,
				message,
			});
		}

		await writeLog("Info", "Handled default worker request", { ...metadata, route: url.pathname }, env);

		return new Response("Hello World!");
	},
} satisfies ExportedHandler<Env>;
