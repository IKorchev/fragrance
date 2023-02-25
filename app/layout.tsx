import Navbar from '@components/Navbar';
import '@styles/globals.css';

export default async function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang='en' className='grid h-full'>
      <body className='bg-gray-900 text-gray-100'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
