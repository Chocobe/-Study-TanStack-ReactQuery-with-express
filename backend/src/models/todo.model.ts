import db from './db';

export async function findTodosByUserId(userId: number) {
  const [rows] = await db.query(
    'SELECT * FROM todos WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );

  return rows;
}
