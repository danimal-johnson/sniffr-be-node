import express from 'express';
import type { Request, Response } from 'express';
import { sign, decode, verify } from 'jsonwebtoken';


import * as authService from './auth.service';

export const authRouter = express.Router();

const SECRET_KEY = process.env.JWT_SECRET || 'secret';

// POST /api/signup
authRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);
    console.log(user);
    res.json(user);
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// POST /api/login
authRouter.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await authService.login(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = sign({ username }, SECRET_KEY);
    res.json({ 
      ...user, 
      token
    });
  }
  catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});
