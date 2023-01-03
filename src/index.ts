import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello TypeScript!');
});

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));