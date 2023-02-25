import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import clientPromise from '../../../lib/mongo';
import { Session } from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

export const authOptions = {
  providers: [
    DiscordProvider({
      //@ts-ignore
      clientId: process.env.DISCORD_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, user }: { session: Session; user: Session['user'] }) => {
      session.user.id = user.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
