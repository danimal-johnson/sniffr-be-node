import express from 'express';
import type { Request, Response } from 'express';
import { body } from 'express-validator';

import * as userService from './user.service';

export const dogsRouter = express.Router();

// GET /api/dogs
dogsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const dogs = await userService.listDogs();
    res.json(dogs);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/dogs/:id
dogsRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const dog = await userService.findDogById(Number(req.params.id));
    res.json(dog);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// TODO: add POST, PUT, DELETE