import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Schedule } from '@/entities/schedule.entity';
import { ScheduleController } from '@/controllers/schedule.controller';
import { ScheduleRepository } from '@/repositories/schedule.repository';
import { ScheduleService } from '@/services/schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule])],
  controllers: [ScheduleController],
  providers: [ScheduleService, ScheduleRepository],
  // exports: [ScheduleService, ScheduleRepository],
})
export class ScheduleModule {}
