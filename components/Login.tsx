'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <main className='flex justify-center py-12 h-full'>
      <div className='min-w-[300px] min-h-[200px] flex flex-col justify-between p-5 bg-slate-800 border border-slate-600 rounded-md'>
        <h3 className='text-3xl text-center uppercase'>Sign in</h3>
        <button className='btn btn-tertiary px-10 w-max mx-auto' onClick={() => signIn('discord')}>
          Sign in with Discord
        </button>
      </div>
    </main>
  );
}
