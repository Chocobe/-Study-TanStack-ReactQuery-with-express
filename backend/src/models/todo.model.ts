import db from './db';

export async function findTodosByUserId(userId: number) {
  const [rows] = await db.query(
    'SELECT * FROM todos WHERE user_id = ? ORDER BY created_at DESC',
    [userId]
  );

  return rows;
}

export async function createTodo(content: string, userId: number) {
  const [result] = await db.query(
    `
      INSERT INTO todos (content, completed, user_id)
      VALUES (?, false, ?)
    `,
    [content, userId]
  );

  console.group('createTodo()');
  console.log('result: ', result);
  console.groupEnd();

  const insertId = (result as any).insertId;

  const [rows] = await db.query(
    `
      SELECT * FROM todos WHERE id = ?
    `,
    [insertId]
  );

  return (rows as any[])[0];
}