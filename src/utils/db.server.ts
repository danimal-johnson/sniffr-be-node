import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// Prevents extra connections to the database
if (!global.__db) {
  global.__db = new PrismaClient();
}

db = global.__db;

export { db };
