# About backend servers: 

when we deploy an app on the internet there are a few ways to do so: 
- Rent a `VM (Virtual Machine)` to deploy an app.
- put it in an `autoscaling` group
- Deploy on `Kubernetes` cluster.

Few downsides to it: 

- Taking care of how/when to scale.
- Base cost when no one is visiting.
- Monitoring various servers ensuring none is down.

---

# Serverless backends:

> `"Serverless"` is a backend deployment in which the `cloud provider` dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.

the app would:
- Deploy 
- Autoscale
- Charge per request rather than renting a vm.

problems with it: 
- Scaling gets `expensive` due to per request charge. 
- `Cold start` problem on inactivity (latency after restarting the server).
---

## Famous serverless providers: 

- AWS lambda
- Google Cloud functions 
- Cloudflare workers

## When to use serverless architecture:

1) When you have to get off the ground fast and don't want to worry about deployments.
2) When you can't anticipate the traffic and don't want to worry about autoscaling.
3) if you have very low traffic (optimize for cost). 

---

## Cloudflare workers: 

Cloudflare workers does not use Node.js runtime. They have created their own runtime. There are a lot of things Node.js has 

## Working 

Cloudflare Workers is a `serverless` platform that lets you run JavaScript and Web APIs on Cloudflare’s global edge network.

Instead of running your code on a `single centralized server`, your Worker runs on distributed machines located around the world, closer to users for lower latency and faster responses.

Key Concepts:

1. JavaScript Runtime

Cloudflare Workers behave similarly to JavaScript running in:
- Browsers
- Node.js

However, Workers run inside Cloudflare’s custom runtime environment.

Powered by the `V8 Engine`
Under the hood, Workers use the V8 JavaScript engine.

V8 is the same engine used by:

- Google Chrome
- Chromium
- Node.js

This allows Workers to execute JavaScript very efficiently.

2. Web Standard APIs

The Workers runtime implements many standard browser APIs, including:

- fetch()
- Request
- Response
- Streams
- URL APIs

This makes development feel similar to modern frontend or Node.js programming.

3. Edge Computing

Traditional applications usually run on:

- A browser application
- A centralized server

Cloudflare Workers instead run on `Cloudflare’s Edge Network.`

That means your code executes on machines distributed across hundreds of locations worldwide.

4. Global Distribution

Cloudflare operates a large global network of edge locations.

Benefits include:

- Faster response times
- Lower latency
- Better scalability
- Reduced server management
Requests are processed near the user rather than traveling to a distant central server.

---

## Initializing a Worker: 

1. initalize a worker 

```bash
npm create cloudflare --my-app 
```

---

## Routing in a cloudflare environment: 

```ts
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if(request.method === "GET"){
			return Response.json({
				msg:"You have sent a request"
			});
		}else{
			return Response.json({
				msg: "You did not send a request"
			});
		}
	},
};
```

--- 

## Deploying a Worker: 

steps to deploy a worker:
- Log in to the Cloudflare workers dashboard using wrangler GUI by:

```bash
npx wrangler login
``` 

- run in the terminal 

```bash
npm run deploy
```

---

> Assigning a custom domain: 

- You have to buy a plan to be able to do this.
- You also need to buy domain on cloudflare/transfer the domain to cloudflare. 

---

## Adding express to it:

> Express cannot run on cloudflare workers since express heavily relies on Node.js runtime.
 
Here we use Hono for it.

## Installing Hono:

```bash
npm create hono@latest project_name
```
---

## Deployment 

```bash
npm run deploy
```
---
