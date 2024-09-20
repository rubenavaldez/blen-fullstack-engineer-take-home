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
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  description: string;
  dueDate: Date | string;
};

export default function Add() {
  const router = useRouter();

  const [formData, setFormData] = React.useState<FormData>({
    title: '',
    description: '',
    dueDate: '',
  });

  const form = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      dueDate: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!formData.title || !formData.description || !formData.dueDate) return;
    const payload: FormData = {
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate.toString(),
    };

    console.log('From Data: ', payload);

    router.push('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-gray-700 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">Create New Task</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is the titlt of your task?</FormLabel>
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
                  <FormLabel>Description</FormLabel>
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
                  <FormDescription>Write a detailed description of the task</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="dueDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
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
                  <FormDescription>When does the task need to be completed by?</FormDescription>
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
