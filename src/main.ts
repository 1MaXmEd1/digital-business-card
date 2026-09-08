import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  console.log('=== 1: bootstrap started ===');

  const app = await NestFactory.create(AppModule);

  console.log('=== 2: NestFactory.create completed ===');

  await app.listen(process.env.PORT ?? 3000);

  console.log('=== 3: app.listen completed ===');
}

await bootstrap();