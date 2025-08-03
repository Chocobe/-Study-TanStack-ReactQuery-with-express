import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

const app = express();

app.use('/api/v1/hello', (req, res) => {
  console.log('🐳 /hello');

  res.json({
    message: 'Hello Luna!',
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

  console.log(process.env.NODE_ENV);
});
