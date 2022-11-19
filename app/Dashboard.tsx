'use client';
import { signIn } from 'next-auth/react';

export function Dashboard({ providers }) {
  return (
    <div>
      Dashboard
      <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
      </>
    </div>
  );
}
