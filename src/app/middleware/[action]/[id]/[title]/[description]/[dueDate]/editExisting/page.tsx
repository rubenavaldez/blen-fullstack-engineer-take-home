'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  description: string;
  dueDate: Date | string;
};

export default function Add() {
  const router = useRouter();
  const { id, title, description, dueDate } = useParams();

  const cleanText = (paramString: string | string[]) => {
    if (typeof paramString == 'string') {
      return paramString.replace(/%20/g, ' ');
    } else {
      return '';
    }
  };
  const formatDate = (dateString: string | string[]) => {
    if (typeof dateString == 'object') {
      dateString = dateString[0];
    }
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  };

  const cleanTitle = cleanText(title);
  const cleanDescription = cleanText(description);
  const cleanDueDate = dueDate ? formatDate(dueDate) : '';
  console.log('from params', id, cleanTitle, cleanDescription, cleanDueDate);

  const [formData, setFormData] = React.useState<FormData>({
    title: '',
    description: '',
    dueDate: '',
  });
  console.log('in component form data', formData);

  const form = useForm<FormData>({
    defaultValues: {
      title: cleanTitle,
      description: cleanDescription,
      dueDate: cleanDueDate,
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!formData.title || !formData.description || !formData.dueDate) return;
    const payload: FormData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      dueDate: formData.dueDate.toString(),
    };

    console.log('From Data: ', payload);

    router.push(
      `/middleware/edit/${id}/${payload.title}/${payload.description}/${payload.dueDate}`
    );
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      title: cleanTitle,
      description: cleanDescription,
      dueDate: cleanDueDate,
    }));
    console.log('set form data', cleanTitle, cleanDescription);
  }, [cleanDueDate, cleanDescription, cleanTitle]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-gray-700 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Edit this task</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Change the Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Task Title"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setFormData((prev) => ({ ...prev, title: e.target.value }));
                      }}
                    />
                  </FormControl>
                  <FormDescription>Title should be less than 10 words</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Edit Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Description"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setFormData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription>Change the description of the task</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="dueDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Edit Due Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={
                        field.value instanceof Date
                          ? field.value.toISOString().split('T')[0]
                          : field.value
                      }
                      onChange={(e) => {
                        field.onChange(e);
                        setFormData((prev) => ({ ...prev, dueDate: e.target.value }));
                      }}
                    />
                  </FormControl>
                  <FormDescription>Change the Due Date</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
