import AuthContext from './AuthContext';
import { Dashboard } from './Dashboard';
import { unstable_getServerSession } from 'next-auth/next';
import { getProviders, signIn } from 'next-auth/react';

export default async function Page(): React.ReactNode {
  const providers = await getProviders();
  console.log(providers);
  return (
    <div>
      <AuthContext>
        <Dashboard providers={providers} />
      </AuthContext>
    </div>
  );
}
