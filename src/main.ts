import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 🔥 Active CORS
  app.enableCors({
    origin: "http://localhost:3001", // 🔥 Autorise uniquement ton frontend Vite
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // 🔥 Si tu utilises des cookies ou tokens
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
