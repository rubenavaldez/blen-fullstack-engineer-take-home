import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const cards = [
    { title: 'title', description: 'description', content: 'content', footer: 'footer' },
    { title: 'title 2', description: 'description 2', content: 'content 2', footer: 'footer 2' },
  ]; // test data
  return (
    <main className="flex flex-col gap-10 p-10">
      {cards.map((card, i) => {
        return (
          <Card key={'card+' + i}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
}
