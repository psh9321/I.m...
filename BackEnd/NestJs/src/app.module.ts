import { Controller, Get, Module } from '@nestjs/common';
import { PracticeModule } from './practice/practice.module';

@Controller()
class HealthCheckController {
  @Get('/health')
  HealthCheck(): string {
    return 'nestjs health check!!';
  }
}

@Module({

  imports: [PracticeModule],
  controllers: [HealthCheckController],
})
export class AppModule {}
