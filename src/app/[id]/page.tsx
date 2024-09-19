'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

import { useParams } from 'next/navigation';

export default function Detail() {
  const params = useParams();
  const { id } = params;
  const cards = [
    {
      title: 'title',
      description: 'description',
      content: 'content',
      footer: 'footer',
      id: '1234',
    },
    {
      title: 'title 2',
      description: 'description 2',
      content: 'content 2',
      footer: 'footer 2',
      id: '78910',
    },
  ];
  const card = cards.find((c) => c.id == id);

  return (
    <Link href={`/${card?.id}/edit`}>
      <Card>
        <CardHeader>
          <CardTitle>{card?.title}</CardTitle>
          <CardDescription>
            {card?.description}
            <br />
            add additional content Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            hic quo cum dignissimos. Rem quibusdam cupiditate similique distinctio magnam aut,
            laudantium, animi culpa adipisci, a optio repellendus repudiandae doloribus cum qui
            excepturi perferendis amet? Ipsum cupiditate, ratione ullam reprehenderit laboriosam
            itaque magnam ipsa eius nobis non dolorem quam rem maiores.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{card?.content}</p>
        </CardContent>
        <CardFooter>
          <p>{card?.footer}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
