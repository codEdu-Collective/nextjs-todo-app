import './globals.css';

export const metadata = {
  title: 'Nextjs Todo App',
  description: 'Todo APP built using Nextjs SSR feature',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
