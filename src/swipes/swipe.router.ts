import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as swipeService from './swipe.service';

export const swipeRouter = express.Router();

// GET /api/swipes
swipeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const swipes = await swipeService.listSwipes();
    res.json(swipes);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/swipes/:id
swipeRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const swipe = await swipeService.findSwipeById(Number(req.params.id));
    if (swipe) return res.json(swipe);
    return res.status(404).json({ message: 'Swipe not found' });
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// POST /api/swipes (create a new swipe)
swipeRouter.post(
  '/',
  // body('swipe_name').isString().notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const swipe = await swipeService.createSwipe(req.body);
      return res.status(201).json(swipe); // Created
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
);

// PUT /api/swipes/:id (update a swipe)
swipeRouter.put(
  '/:id',
  // body('swipe_name').isString().notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // 400 Bad Request
      return res.status(400).json({ errors: errors.array() });
    }
    const id = Number(req.params.id);
    try {
      const swipe = req.body;
      const updatedSwipe = await swipeService.updateSwipe(swipe, id);
      return res.status(200).json(updatedSwipe);  // OK
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
);

// DELETE /api/swipes/:id (delete a swipe)
swipeRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    await swipeService.deleteSwipe(Number(req.params.id));
    return res.status(204).json(); // No Content
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// TODO: Add filtering
