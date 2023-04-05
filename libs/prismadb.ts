import { PrismaClient } from "@prisma/client";

//global file will not render with hot reloading..
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
