import { db } from '@/db/drizzle';
import { publicProcedure, router } from '../trpc';
import { count } from 'drizzle-orm';
import { countries } from '@/db/schema';

export const appRouter = router({
  helloWorld: publicProcedure.query(async () => {
    const result = await db
      .select({ count: count(countries.id) })
      .from(countries);

    return {
      hello: 'world of beauty',
      count: result[0].count,
    };
  }),
});

export type AppRouter = typeof appRouter;
