import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function App() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory(errors) {
        const message = errors.map((error) =>
          Object.values(error.constraints ?? {}).join(', '),
        )[0];

        return new BadRequestException(message);
      },
    }),
  );

  await app.listen(9999);
  console.log('connect');
}
App();
