/* eslint-disable @next/next/no-img-element */
'use client';
import { signOut } from 'next-auth/react';

export default function Navbar() {
  return (
    <nav className='p-3 mb-2 h-max'>
      <div className='flex justify-between items-center'>
        <button onClick={() => signOut()} className='text-lg btn btn-danger  py-2 px-4'>
          Sign out
        </button>
      </div>
    </nav>
  );
}
