import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
  host: '',
  port: 6606,
  user: '',
  password: '',
});

export default dbPool;
