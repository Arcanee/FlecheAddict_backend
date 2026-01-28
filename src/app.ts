import gridRouter from '#src/grid/grid.routes.ts';
import { HttpException } from '#src/lib/exception.ts';
import { getLogger } from '#src/lib/logger.ts';
import { NextFunction, Request, Response } from 'express';
import express from 'express';

const app = express();
const logger = getLogger();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((_request: Request, _response: Response, _next: NextFunction): void => {
  logger.http('New request');
  _next();
});

// Routers
app.use('/api/grids', gridRouter);

// Global error handler
app.use(
  (
    error: Error,
    _request: Request,
    response: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: unknown,
  ): void => {
    console.error(error);
    if (error instanceof HttpException) {
      response.status(error.statusCode).send(error.message);
    } else {
      response.status(500).send('Internal Server Error');
    }
  },
);

export default app;
