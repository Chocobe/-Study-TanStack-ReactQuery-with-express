import db from './db';
import { TUpdateTodoContentParams } from './todo.model.type';

export async function findTodosByUserId(
  userId: number, 
  completed?: boolean
) {
  let sql = 'SELECT * FROM todos WHERE user_id = ?';
  const params: any[] = [userId];

  if (typeof completed === 'boolean') {
    sql += ' AND completed = ?';
    params.push(completed ? 1 : 0);
  }

  sql += ' ORDER BY created_at DESC';

  const [rows] = await db.query(sql, params);

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
  const [_result] = await db.query(
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

export async function toggleTodoCompleted(id: number, userId: number) {
  const [rows] = await db.query(
    `
      SELECT * FROM todos
      WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  const todo = (rows as any[])?.[0];

  if (!todo) {
    return null;
  }

  const newCompleted = !todo.completed;

  await db.query(
    `
      UPDATE todos
      SET completed = ?, updated_at = NOW()
      WHERE id = ? AND user_id = ?
    `,
    [newCompleted, id, userId]
  );

  const [updatedTodos] = await db.query(
    `
      SELECT * FROM todos
      WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  const updatedTodo = (updatedTodos as any[])?.[0];

  if (!updatedTodo) {
    return null;
  }

  return updatedTodo;
}
