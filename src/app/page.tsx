import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

import { getTasks } from '@/hooks/tasks';
import { ITask } from '@/interfaces';

export default async function Home() {
  const tasks: ITask[] = await getTasks();

  return (
    <main className="flex flex-col gap-10 p-10">
      {tasks.map((task) => {
        return (
          <Link key={'task+' + task.id} href={`/task/${task.id}`}>
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
        );
      })}
    </main>
  );
}
