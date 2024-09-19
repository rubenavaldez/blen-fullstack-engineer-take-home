'use client';
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
import { useParams } from 'next/navigation';

export default function Detail() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  // const taskbyId: ITask = getTaskById(Number(id));
  // console.log(taskbyId);
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
  ];
  const task: ITask | undefined = tasks.find((t) => t.id.toString() == '1234');

  return (
    <>
      {
        task && (
          <Link href={`/${task?.id}/edit`}>
            <Card>
              <CardHeader>
                <CardTitle>{task?.title}</CardTitle>
                <CardDescription>{task?.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <p> Status: {task?.isCompleted ? 'Completed' : 'Incomplete'}</p>
                <p> Due {task?.dueDate}</p>
              </CardContent>
              <hr />
              <CardFooter>
                <p>Created At: {task?.createdAt}</p>
              </CardFooter>
              <CardFooter>
                <p>Last updated: {task?.updatedAt}</p>
              </CardFooter>
            </Card>
          </Link>
        )
        // : (
        //   <Link href="/">
        //     <h3>Sorry this is not a valid task</h3>
        //     Return Home
        //   </Link>
        // )
      }
    </>
  );
}
