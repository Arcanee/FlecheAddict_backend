import { PrismaClient } from '#prisma/client/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';

let currentInstance: null | PrismaClient = null;

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

export function getPrismaClient(): PrismaClient {
  currentInstance ??= new PrismaClient({ adapter });
  return currentInstance;
}
