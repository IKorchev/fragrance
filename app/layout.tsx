import '@/styles/globals.css';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import Navbar from './Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nextCookies = cookies();
  const theme = nextCookies.get('theme');

  return (
    <html lang='en'>
      <body className='bg-gray-900 text-gray-100'>{children}</body>
    </html>
  );
}
