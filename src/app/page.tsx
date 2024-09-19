import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ITask } from '@/interfaces';
import Link from 'next/link';

export default function Home() {
  const tasks: ITask[] = [
    {
      id: 1234,
      title: 'this is the title text',
      description: 'This is the description text ',
      dueDate: '09/30/24',
      isCompleted: false,
      createdAt: '09/12/24',
      updatedAt: '09/18/24',
    },
    {
      id: 97894,
      title: 'this is the second title text',
      description: 'This is the second description text ',
      dueDate: '10/31/24',
      isCompleted: false,
      createdAt: '08/6/24',
      updatedAt: '09/12/24',
    },
  ]; // test data

  return (
    <main className="flex flex-col gap-10 p-10">
      {tasks.map((task) => {
        return (
          <Link key={'task+' + task.id} href={`/${task.id}`}>
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
                <br />
                <p>Last updated: {task.updatedAt}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </main>
  );
}
