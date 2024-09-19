'use client';

import { useParams } from 'next/navigation';

export default function Detail() {
  const params = useParams();
  const { id } = params;

  return <div>edit {id}</div>;
}
