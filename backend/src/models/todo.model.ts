import db from './db';
import { TUpdateTodoContentParams } from './todo.model.type';

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

export async function deleteTodo(id: number, userId: number) {
  const [rows] = await db.query(
    `
      DELETE FROM todos WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  return (rows as any).affectedRows.length > 0;
}

export async function updateTodoContent({
  userId,
  id,
  content,
}: TUpdateTodoContentParams) {
  const [result] = await db.query(
    `
      UPDATE todos
      SET content = ?, updated_at = NOW()
      WHERE id = ? AND user_id = ?
    `,
    [content, id, userId]
  );

  const [rows] = await db.query(
    `
      SELECT * FROM todos
      WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  const todo = (rows as any[])?.[0];

  return todo ?? null;
}
