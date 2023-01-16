import express from 'express';
import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import * as authService from './auth.service';

export const authRouter = express.Router();

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

// POST /api/signup
authRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);
    res.json(user);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// POST /api/login
authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const user = authService.login(req.body.username, req.body.password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.json(user);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});
