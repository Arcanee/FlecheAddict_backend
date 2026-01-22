import { Grid } from '#prisma/client/client.ts';
import * as gridController from '#src/grid/grid.controller.ts';
import * as gridService from '#src/grid/grid.service.ts';
import { HttpStatus } from '#src/lib/models/http.ts';
import { Request, Response } from 'express';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('#src/grid/grid.service.ts', () => ({
  getLastGrid: vi.fn(),
}));

const req = {
  body: {},
  params: {},
  query: {},
} as Request;

const res = {
  send: vi.fn(),
  status: vi.fn().mockReturnThis(),
} as unknown as Response;

describe('GridController', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call service > getLastGrid', async () => {
    const mockGrid: Grid = {
      clues: {},
      columns: 10,
      id: 0,
      releaseDate: new Date(),
      rows: 10,
    };
    vi.mocked(gridService.getLastGrid).mockResolvedValue(mockGrid);

    await gridController.getLastGrid(req, res);

    expect(gridService.getLastGrid).toHaveBeenCalled();
    expect(res.send).toHaveBeenCalledWith(mockGrid);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
  });

  it('handles service error', async () => {
    const mockError = new Error('fail');
    vi.mocked(gridService.getLastGrid).mockRejectedValue(mockError);

    await expect(gridController.getLastGrid(req, res)).rejects.toThrow(
      mockError,
    );
  });
});
