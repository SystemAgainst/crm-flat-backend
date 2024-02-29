import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const PORT = process.env.PORT || 7077;

  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Бэкенд для CRM-FLAT')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);

  await app.listen(PORT);
}
bootstrap();
