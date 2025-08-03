import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/v1/hello', (req, res) => {
  console.log('🐳 /hello 🐳');

  res.json({
    message: 'Hello Luna 🥰🥰🥰',
  });
});

app.use('/api/v1/world', (req, res) => {
  console.log('🚀 /world');

  res.json({
    message: 'World~',
  });
})

app.listen(process.env.PORT, () => {
  console.log('-------------------------------');
  console.log('--                           --');
  console.log('-- Server has been started!  --');
  console.log(`--   http://localhost:${process.env.PORT}   --`);
  console.log('--                           --');
  console.log('-------------------------------');
});
