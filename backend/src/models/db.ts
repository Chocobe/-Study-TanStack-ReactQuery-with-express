import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: process.env.DB_HOST || 'http://localhost',
  port: 3306,
  user: 'root',
  password: 'hello-mysql',
  database: process.env.DB_NAME || 'default',
});

db.on('connection', () => {
  console.log('- Connected MySQL -');
  console.log(`- Database: ${process.env.DB_NAME}`);
});

export default db;
