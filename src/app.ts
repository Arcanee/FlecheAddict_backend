import gridRouter from '#src/grid/grid.routes.ts';
import { HttpException } from '#src/lib/exception.ts';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/grids', gridRouter);

// Global error handler
app.use(
  (
    error: Error,
    _request: express.Request,
    response: express.Response,
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
