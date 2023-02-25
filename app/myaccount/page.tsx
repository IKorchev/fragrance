import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import Link from 'next/link';
type Props = {};

export default async function Page({}: Props) {
  const session = await unstable_getServerSession(authOptions);
  return (
    <main className='h-full p-12'>
      <Link className='text-xl underline-offset-4 group p-2 flex w-fit gap-2 justify-center items-center' href='/'>
        {'<'} <span className='group-focus:underline group-hover:underline'>Back</span>
      </Link>
      <div className='p-8 w-[400px] mx-auto rounded-md bg-slate-800 border border-slate-700'>
        <h1 className='text-xl text-center mb-12'>User details</h1>
        <p className='mb-3 border-b border-slate-400 flex justify-between'>
          <span className='font-semibold'>Name</span> {session?.user.name}
        </p>
        <p className='mb-3 border-b border-slate-400 flex justify-between'>
          <span className='font-semibold'>Email</span> {session?.user.email}
        </p>
        <p className='mb-3 border-b border-slate-400 flex justify-between'>
          <span className='font-semibold'>Image</span> {session?.user.image?.substring(0, 20).concat('...')}
        </p>
        <div className='hidden'></div>
      </div>
    </main>
  );
}
