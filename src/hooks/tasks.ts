import { db } from '@/db/client';
import { tasks } from '@/db/schema';
import { ITask } from '@/interfaces';

export async function getAllTasks(): Promise<ITask[]> {
  const result = await db.query.tasks.findMany();
  return result;
}

export async function getTaskById(id: number): Promise<ITask | null> {
  const task: ITask = await db.tasks.findUnique({
    where: { id: id },
  });

  // console.log('get one task', task);
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    createdAt: task.createdAt,
    dueDate: task.dueDate,
    isCompleted: task.isCompleted,
    updatedAt: task.updatedAt,
  };
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
