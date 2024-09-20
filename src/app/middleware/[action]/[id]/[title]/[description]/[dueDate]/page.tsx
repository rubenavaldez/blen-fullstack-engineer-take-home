interface DetailsProps {
  params: { action: string; title: string; description: string; dueDate: string };
}
import { createTask } from '@/hooks/tasks';
import { redirect } from 'next/navigation';

export default async function Detail({ params }: DetailsProps) {
  console.log(params);
  console.log('dueDate');
  const title = params.title.replace(/%20/g, ' ');
  const description = params.description.replace(/%20/g, ' ');

  switch (params.action) {
    case 'add':
      await createTask(title, description, params.dueDate);
      break;
    case 'edit':
      break;
    default:
      break;
  }
  redirect('/');
}
