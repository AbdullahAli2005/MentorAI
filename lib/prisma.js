// import { PrismaClient } from "@prisma/client";

// export const db = globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = db;
// }


// lib/prisma.js
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Get connection string from .env (make sure it's set!)
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set in your .env file");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

function prismaClientSingleton() {
  return new PrismaClient({
    adapter,
    log: ['query', 'info', 'warn', 'error'],
  });
}

// Use globalThis for safety (works in all environments)
const globalForPrisma = globalThis;

// Reuse existing instance in dev (hot reload friendly)
const prisma = globalForPrisma.prisma || prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.