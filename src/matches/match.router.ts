import express from 'express';
import type { Request, Response } from 'express';
// TODO: remove? import { body } from 'express-validator';

import * as matchService from './match.service';

export const matchRouter = express.Router();

// GET /api/matches
matchRouter.get('/', async (req: Request, res: Response) => {
  try {
    const matches = await matchService.listMatches();
    res.json(matches);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/matches/:id
matchRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const matches = await matchService.findMatchById(Number(req.params.id));
    res.json(matches);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// DELETE /api/matches/:id
matchRouter.delete('/matches/:id', async (req: Request, res: Response) => {
  try {
    const matches = await matchService.deleteMatch();
    res.json(matches);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});
