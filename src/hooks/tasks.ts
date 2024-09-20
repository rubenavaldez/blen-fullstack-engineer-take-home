import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { ITask } from '@/interfaces';

export async function getAllTasks(): Promise<ITask[]> {
  const result = await db.query.tasks.findMany();
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
      createdAt: Date.now(),
      dueDate: dueDate,
      isCompleted: false,
      updatedAt: Date.now(),
    })
    .returning();
  console.log('create task', result);
  return result;
}
