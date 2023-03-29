import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;
  const config = new DocumentBuilder()
    .setTitle('Auth')
    .setDescription('Auth documentation')
    .setVersion('0.0.1')
    .addTag('auth')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  
  await app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));
}
bootstrap();
