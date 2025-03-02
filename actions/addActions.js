'use server';

import { revalidatePath } from 'next/cache';

export default async function addActions(formData) {
  const baseURL = process.env.BASE_URL;
  const todo = formData.get('todo');
  if (!todo || !todo.toString().trim()) return;

  try {
    const response = await fetch(`${baseURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: todo, isDone: false }),
    });

    if (!response.ok) {
      throw new Error('POST request failed!');
    }

    revalidatePath('/');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
