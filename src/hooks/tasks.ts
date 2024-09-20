import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { ITask } from '@/interfaces';
import { eq } from 'drizzle-orm';

export async function getAllTasks(): Promise<ITask[]> {
  const result = await db.query.tasks.findMany();
  console.log('get all tasks', result);
  return result;
}

export async function getTaskById(id: number): Promise<ITask | null> {
  const task: ITask = await db.query.tasks.findFirst({
    where: (tasks: any, { eq }: any) => eq(tasks.id, id),
  });

  return task;
}

export async function createTask(title: string, description: string, dueDate: String) {
  const result: ITask = await db
    .insert(tasks)
    .values({
      title: title,
      description: description,
      createdAt: new Date().toISOString().split('T')[0],
      dueDate: dueDate,
      isCompleted: false,
      updatedAt: new Date().toISOString().split('T')[0],
    })
    .returning();
  console.log('create task', result);
  return result;
}

export async function deleteTask(id: number): Promise<void> {
  console.log('Deleted task with ID:', id);
  const result = await db.delete(tasks).where(eq(tasks.id, id));
  console.log('Delete result', result);
  return result;
}

// Mark a task as completed by its ID
export async function completeTask(id: number): Promise<ITask | null> {
  const updatedTask: ITask = await db
    .update(tasks)
    .set({ isCompleted: true, updatedAt: new Date().toISOString().split('T')[0] })
    .where(eq(tasks.id, id))
    .returning();

  console.log('Completed task with ID:', id);
  return updatedTask;
}
