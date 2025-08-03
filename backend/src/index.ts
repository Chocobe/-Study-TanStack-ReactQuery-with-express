import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dbPool from './database/dbPool';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

const app = express();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.get('/api/v1/hello', (req, res) => {
  console.log('🐳 /hello 🐳');

  res.json({
    message: 'Hello Luna 🥰🥰🥰',
  });
});

app.get('/api/v1/world', (req, res) => {
  console.log('🚀 /world');

  res.json({
    message: 'World~',
  });
})

app.post('/api/v1/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('email: ', email);
  console.log('password: ', password);

  // TODO: try ~ catch 적용하기

  const data = await dbPool.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password]
  );

  const user = (data[0] as Array<any>)[0];

  res.json(user);
});

app.listen(process.env.PORT, () => {
  console.log('-------------------------------');
  console.log('--                           --');
  console.log('-- Server has been started!  --');
  console.log(`--   http://localhost:${process.env.PORT}   --`);
  console.log('--                           --');
  console.log('-------------------------------');
});
