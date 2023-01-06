import express from 'express';
import type { Request, Response } from 'express';
import { body } from 'express-validator';

import * as dogService from './dog.service';

export const dogRouter = express.Router();

// GET /api/dogs
dogRouter.get('/', async (req: Request, res: Response) => {
  try {
    const dogs = await dogService.listDogs();
    res.json(dogs);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/dogs/:id
dogRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const dog = await dogService.findDogById(Number(req.params.id));
    if (dog) return res.json(dog);
    return res.status(404).json({ message: 'Dog not found' });
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// TODO: add POST, PUT, DELETE