import express from 'express';
import type { Request, Response } from 'express';
// TODO: remove? import { body } from 'express-validator';

import * as infoService from './info.service';

export const infoRouter = express.Router();

// GET /api/temperaments
infoRouter.get('/temperaments', async (req: Request, res: Response) => {
  try {
    const temperaments = await infoService.listBreeds();
    res.json(temperaments);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/sizes
infoRouter.get('/sizes', async (req: Request, res: Response) => {
  try {
    const sizes = await infoService.listSizes();
    res.json(sizes);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/activities
infoRouter.get('/activities', async (req: Request, res: Response) => {
  try {
    const activities = await infoService.listActivities();
    res.json(activities);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/breeds
infoRouter.get('/breeds', async (req: Request, res: Response) => {
  try {
    const breeds = await infoService.listBreeds();
    res.json(breeds);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});