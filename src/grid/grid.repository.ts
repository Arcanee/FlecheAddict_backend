import { Grid, PrismaClient } from '#prisma/client/client.ts';
import { getPrismaClient } from '#src/lib/prismaClient.ts';

const prisma: PrismaClient = getPrismaClient();

export async function getMostRecent(): Promise<Grid | null> {
  return prisma.grid.findFirst({
    orderBy: { releaseDate: 'desc' },
  });
}
