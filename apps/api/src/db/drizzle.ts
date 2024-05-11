import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { env } from '../env';
import * as schema from './schema';

// for query purposes
const queryClient = postgres(env.DATABASE_URL);
export const db = drizzle(queryClient, { schema });
