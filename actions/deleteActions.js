'use server';

import { revalidatePath } from 'next/cache';

export default async function deleteActions(formData) {
  const id = formData.get('id');
  const baseURL = process.env.BASE_URL;

  if (!id) return;

  try {
    const res = await fetch(`${baseURL}/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('DELETE request failed!');
    }

    revalidatePath('/');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
