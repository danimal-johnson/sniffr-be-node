import express from 'express';
import type { Request, Response } from 'express';
import { body } from 'express-validator';

import * as userService from './user.service';

export const userRouter = express.Router();

// GET /api/users
userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.json(users);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// GET /api/users/:id
userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await userService.findUserById(Number(req.params.id));
    if (user) return res.json(user);
    return res.status(404).json({ message: 'User not found' });
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// TODO: add POST, PUT, DELETE