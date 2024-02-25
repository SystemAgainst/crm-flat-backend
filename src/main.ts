import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 7077;

  app.setGlobalPrefix('api/v1');

  await app.listen(PORT);
}
bootstrap();
