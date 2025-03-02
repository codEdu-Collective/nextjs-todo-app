'use server';

import { revalidatePath } from 'next/cache';

export default async function updateActions(formData) {
  const id = formData.get('id');
  const isDone = formData.get('isDone') === 'true';
  const baseURL = process.env.BASE_URL;

  if (!id) return;

  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        isDone: !isDone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('PUT request failed!');
    }

    revalidatePath('/');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
