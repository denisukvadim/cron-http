import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { CronModule } from './cron/cron.module';

@Module({
  imports: [ScheduleModule.forRoot(), CronModule],
})
export class AppModule {}
