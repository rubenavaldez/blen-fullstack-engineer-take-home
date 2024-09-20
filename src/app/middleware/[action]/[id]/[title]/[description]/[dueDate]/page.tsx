interface DetailsProps {
  params: { id: string; action: string; title: string; description: string; dueDate: string };
}
import { createTask, editTask } from '@/hooks/tasks';
import { redirect } from 'next/navigation';

export default async function Detail({ params }: DetailsProps) {
  console.log(params);
  console.log('dueDate');
  const id = parseInt(params.id, 10);
  const title = params.title.replace(/%20/g, ' ');
  const description = params.description.replace(/%20/g, ' ');

  switch (params.action) {
    case 'add':
      await createTask(title, description, params.dueDate);
      break;
    case 'edit':
      await editTask(id, title, description, params.dueDate);
      break;
    default:
      break;
  }
  redirect('/');
}
