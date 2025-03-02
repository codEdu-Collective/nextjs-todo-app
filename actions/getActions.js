'use server';

export default async function getActions() {
  const baseURL = process.env.BASE_URL;
  try {
    const res = await fetch(`${baseURL}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('GET request failed!');
    }

    return await res.json();
  } catch (error) {
    console.error('Error occurred:', error);
    return [];
  }
}
