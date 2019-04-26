
import * as env from 'dotenv';
env.config();

import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: String(process.env.TCP_HOST),
      port: parseInt(process.env.TCP_PORT),
      retryAttempts: 5,
      retryDelay: 3000,
    }
  })
  await app.startAllMicroservicesAsync();
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();