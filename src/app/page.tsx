import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

import { getAllTasks } from '@/hooks/tasks';
import { ITask } from '@/interfaces';
export default async function Home() {
  const tasks: ITask[] = await getAllTasks();

  return (
    <main className="flex flex-col gap-10 p-10">
      <div className="mb-8 flex justify-center">
        <Link href={`/add`}>
          <h1 className="rounded-lg bg-white p-4 text-center text-xl font-semibold text-gray-800 shadow hover:bg-gray-100">
            add a task
          </h1>
        </Link>
      </div>

      {tasks.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => {
            return (
              <div key={'task+' + task.id} className="flex flex-col gap-6">
                <Link href={`/${task.id}`}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{task.title}</CardTitle>
                      <CardDescription>{task.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p> Status: {task.isCompleted ? 'Completed' : 'Incomplete'}</p>
                      <p> Due {task.dueDate}</p>
                    </CardContent>
                    <hr />
                    <CardFooter>
                      <p>Created At: {task.createdAt}</p>
                    </CardFooter>
                    <CardFooter>
                      <p>Last updated: {task.updatedAt}</p>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
