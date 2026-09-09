import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();

async function bootstrap(expressInstance: any) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.enableCors({
    origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
    credentials: true,
  });

  await app.init();
}

bootstrap(server);

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT ?? 3000;
  server.listen(port, () => {
    console.log(`Server running locally on http://localhost:${port}`);
  });
}

export default server;
