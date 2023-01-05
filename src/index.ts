import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import { infoRouter } from './info/info.router';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Thanks for sniffing our backend!');
});

// TODO: Add routes here
// app.use('/api/dogs', dogRouter);
// app.use('/api/users', userRouter);
// app.use('/api/matches', matchRouter);
// app.use('/api/swipes', swipeRouter);

app.use('/api', infoRouter);

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));