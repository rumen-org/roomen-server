import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/utils/swagger.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_PASSWORD);
  app.enableCors();
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
