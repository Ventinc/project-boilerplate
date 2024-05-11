import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './routers';
import '@/env';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.json('ok'));

app.get('/health', (_req, res) => {
  return res.status(200);
});

app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
  })
);

app.listen(1337, () => {
  console.log('App listen on port 1337: http://localhost:1337');
});
