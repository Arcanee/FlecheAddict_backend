import { Grid } from '#prisma/client/client.ts';
import * as gridService from '#src/grid/grid.service.ts';
import { HttpStatus } from '#src/lib/models/http.ts';
import { Request, Response } from 'express';

export async function getLastGrid(
  request: Request,
  response: Response,
): Promise<void> {
  const lastGrid: Grid = await gridService.getLastGrid();
  response.status(HttpStatus.OK).send(lastGrid);
}
