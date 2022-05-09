import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder().setTitle('Twitter Api')
  .setDescription('Api Testing Platform of Twitter clone')
  .setVersion('1.0')
  .addTag('twitter')
  .build();
  const document =SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
