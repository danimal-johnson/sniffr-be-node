import express from 'express';
import type { Request, Response } from 'express';
import { body } from 'express-validator';

import * as infoService from './info.service';

export const infoRouter = express.Router();

// GET /api/temperaments
infoRouter.get('/temperaments', async (req: Request, res: Response) => {
  const breeds = await infoService.listBreeds();
  res.json(breeds);
});

// GET /api/sizes
infoRouter.get('/sizes', async (req: Request, res: Response) => {
  console.log('Getting sizes...');
  const breeds = await infoService.listSizes();
  res.json(breeds);
});

// GET /api/activities
infoRouter.get('/activities', async (req: Request, res: Response) => {
  const breeds = await infoService.listActivities();
  res.json(breeds);
});

// GET /api/breeds
infoRouter.get('/breeds', async (req: Request, res: Response) => {
  const breeds = await infoService.listBreeds();
  res.json(breeds);
});