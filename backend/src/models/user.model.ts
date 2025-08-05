import db from './db';

export async function findByCredential(email: string, password: string) {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password]
  );

  const users = rows as any[];

  return users.length > 0 ? users[0] : null;
}
