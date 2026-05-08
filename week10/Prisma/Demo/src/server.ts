import { PrismaClient } from "./generated/prisma/client.js";

const prisma = new PrismaClient();

async function createUser(email: string, password: string, firstname: string, lastname: string): Promise<any> {
    const user = await prisma.user.create({
        data: {
            email,
            password,
            firstname,
            lastname
        }
    });
    console.log("User created:", user);
    return user;
}

interface updateParams {
    firstname: string;
    lastname: string;
}

async function updateuser(email: string, { firstname, lastname }: updateParams): Promise<any> {
    const updatedUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            firstname,
            lastname
        }
    });
    console.log("User updated:", updatedUser);
    return updatedUser;
}

async function getUser(username: string): Promise<any> {
    const user = await prisma.user.findUnique({
        where: {
            email: username
        }
    });
    console.log("User found:", user);
    return user;
}

// Main execution
(async () => {
    try {
        await createUser("arnavK@gmail.com", "testpass", "Arnav", "K");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await prisma.$disconnect();
    }
})();