import * as gridController from '#src/grid/grid.controller.ts';
import express from 'express';

const router = express.Router();

router.get('/last', gridController.getLastGrid);

export default router;
