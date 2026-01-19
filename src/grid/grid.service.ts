import { Grid } from '#prisma/client/client.ts';
import * as gridRepository from '#src/grid/grid.repository.ts';
import { NotFoundException } from '#src/lib/exception.ts';

export async function getLastGrid(): Promise<Grid> {
  const lastGrid: Grid | null = await gridRepository.getMostRecent();

  if (!lastGrid) {
    throw new NotFoundException('No grid was found');
  }
  return lastGrid;
}
