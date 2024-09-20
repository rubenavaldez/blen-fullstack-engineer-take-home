import { completeTask, deleteTask } from '@/hooks/tasks';
import { redirect } from 'next/navigation';

interface DetailsProps {
  params: { action: string; id: string; title: string; description: string; dueDate: string };
}

export default async function Detail({ params }: DetailsProps) {
  console.log(params);
  console.log('id');
  const changeId = parseInt(params.id, 10);

  switch (params.action) {
    case 'complete':
      await completeTask(changeId);
      break;
    case 'delete':
      await deleteTask(changeId);
      break;
    default:
      break;
  }
  redirect('/');
}
