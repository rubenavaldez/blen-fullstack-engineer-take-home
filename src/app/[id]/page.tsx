import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getTaskById } from '@/hooks/tasks';
import { ITask } from '@/interfaces';
import Link from 'next/link';

interface DetailsProps {
  params: { id: string };
}

export default async function Detail({ params }: DetailsProps) {
  const id = parseInt(params.id);
  const task: ITask | null = await getTaskById(id);

  if (!task) {
    return (
      <div className="mb-8 flex justify-center">
        <h3 className="rounded-lg bg-white p-4 text-center text-xl font-semibold text-gray-800 shadow hover:bg-gray-100">
          Sorry, this is not a valid task.
        </h3>
        <Link href="/">
          <button>Return Home</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex justify-center">
        <Link
          href={`/middleware/add/${task?.id}/${task?.title}/${task?.description}/${task?.dueDate}/editExisting`}>
          <h1 className="rounded-lg bg-white p-4 text-center text-xl font-semibold text-gray-800 shadow hover:bg-gray-100">
            Edit task
          </h1>
        </Link>
      </div>
      {task && (
        <>
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
        </>
      )}
    </>
  );
}
