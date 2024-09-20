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
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-gray-700 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">Task Details</h2>

        <Link href="/">
          <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
