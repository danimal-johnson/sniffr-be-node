import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

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

// POST /api/dogs (create a new dog)
dogRouter.post(
  '/',
  body('dog_name').isString().notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const dog = await dogService.createDog(req.body);
      return res.status(201).json(dog);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
);

// PUT /api/dogs/:id (update a dog)
dogRouter.put(
  '/:id',
  body('dog_name').isString().notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = Number(req.params.id);
    try {
      const dog = req.body;
      const updatedDog = await dogService.updateDog(dog, id);
      return res.status(200).json(updatedDog);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
);

