import { Grid } from '#prisma/client/client.ts';
import * as gridRepository from '#src/grid/grid.repository.ts';
import * as gridService from '#src/grid/grid.service.ts';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('#src/grid/grid.repository.ts', () => ({
  getMostRecent: vi.fn(),
}));

describe('GridService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should get all grids and return the most recent one', async () => {
    const mockGrid: Grid = {
      clues: {},
      columns: 10,
      id: 0,
      releaseDate: new Date(),
      rows: 10,
    };
    vi.mocked(gridRepository.getMostRecent).mockResolvedValue(mockGrid);

    const lastGrid: Grid = await gridService.getLastGrid();

    expect(gridRepository.getMostRecent).toHaveBeenCalled();
    expect(lastGrid).toBe(mockGrid);
  });

  it('handles service error', async () => {
    const mockError = new Error('fail');
    vi.mocked(gridRepository.getMostRecent).mockRejectedValue(mockError);

    await expect(gridService.getLastGrid()).rejects.toThrow(mockError);
  });
});
