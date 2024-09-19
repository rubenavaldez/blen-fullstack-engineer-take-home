import { db } from '@/db/client';
import { tasks } from '@/db/schema';

export async function getAllTasks() {
  const result = await db.query.tasks.findMany();
  return result;
}

export async function getTaskById(id: number) {
  const task = await db.tasks.findUnique({
    where: { id },
  });
  console.log('get one task', task);
  return task;
}

export async function createTask(name: string, title: string, description: string) {
  const result = await db
    .insert(tasks)
    .values({
      name: name,
      title: title,
      description: description,
      createAt: Date.now(),
      dueDate: Date.now(),
      isCompleted: false,
      updatedAt: Date.now(),
    })
    .returning();
  console.log('create task', result);
  return result;
}
