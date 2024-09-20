interface DetailsProps {
  params: { title: string; description: string; dueDate: string };
}
import { createTask } from '@/hooks/tasks';
import { redirect } from 'next/navigation';

export default async function Detail({ params }: DetailsProps) {
  console.log(params);
  const title = params.title.replace(/%20/g, ' ');
  const description = params.description.replace(/%20/g, ' ');

  const result = await createTask(title, description, params.dueDate);
  redirect('/');
}
