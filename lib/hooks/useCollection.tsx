import clientPromise from 'lib/mongo';
import { Collection, Document } from 'mongodb';

export async function getCollection(
  name: TCollectionName
): Promise<Collection<Document>> {
  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB_NAME || 'test');
  return db.collection(name);
}
