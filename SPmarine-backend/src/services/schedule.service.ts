import { Injectable } from '@nestjs/common';

import { ScheduleRepository } from '@/repositories/schedule.repository';
import { Schedule } from '@/entities/schedule.entity';
 
@Injectable()
export class ScheduleService {
  constructor(private readonly repository: ScheduleRepository) {}

  public async getSchedules(): Promise<Schedule[]> {
    return await this.repository.getSchedules();
  }

 
 

  public async getSchedulesByTugboatId(tugboatId: string): Promise<Schedule[]> {
    return await this.repository.getSchedulesByTugboatId(tugboatId);
  }

  public async getSchedulesByOrderId(orderId: string): Promise<Schedule[]> {
    return await this.repository.getSchedulesByOrderId(orderId);
  }

  public async getSchedulesByTugboatAndOrderId(
    tugboatId: string,
    orderId: string,
    enter_datetime?: string,
    exit_datetime?: string,
  ): Promise<Schedule[]> {
    return await this.repository.getSchedulesByTugboatAndOrderId(
      tugboatId,
      orderId,
      enter_datetime,
      exit_datetime,
    );
  }
}
