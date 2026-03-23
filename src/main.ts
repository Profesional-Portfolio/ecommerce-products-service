import { Logger, ValidationPipe } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { env } from "./modules/config";

async function bootstrap() {
  const logger = new Logger("Orders service");
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: env.RABBITMQ_URLS,
        queue: env.RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen();
  logger.log("Orders service running");
}

bootstrap();
