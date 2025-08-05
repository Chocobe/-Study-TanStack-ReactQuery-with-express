import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import authRouter from './routes/auth.routes';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

const ROOT_PATH = '/api/v1';
app.use(`${ROOT_PATH}/auth`, authRouter);

app.listen(process.env.PORT, () => {
  console.log('-------------------------------');
  console.log('--                           --');
  console.log('-- Server has been started!  --');
  console.log(`--   http://localhost:${process.env.PORT}   --`);
  console.log('--                           --');
  console.log('-------------------------------');
});
