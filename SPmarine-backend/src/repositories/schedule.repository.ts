import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';

import { Schedule } from '@/entities/schedule.entity';
 
@Injectable()
export class ScheduleRepository {
  constructor(
    @InjectRepository(Schedule)
    private readonly entities: Repository<Schedule>,
  ) {}

  public async getSchedules(): Promise<Schedule[]> {
    const queryBuilder: SelectQueryBuilder<Schedule> = this.entities.createQueryBuilder('schedule');
    return queryBuilder.getMany();
  }

 

  public async getSchedulesByTugboatId(tugboatId: string): Promise<Schedule[]> {
    return this.entities.find({
      where: { tugboat_id: tugboatId },
      order: { enter_datetime: 'ASC' },
    });
  }

  public async getSchedulesByOrderId(orderId: string): Promise<Schedule[]> {
    return this.entities.find({
      where: { order_id: orderId },
      order: { enter_datetime: 'ASC' },
    });
  }

  public async getSchedulesByTugboatAndOrderId(
    tugboatId: string,
    orderId: string,
    enter_datetime?: string,
    exit_datetime?: string,
  ): Promise<Schedule[]> {
    const whereCondition: any = {
      tugboat_id: tugboatId,
      order_id: orderId,
    };

    if (enter_datetime) {
      whereCondition.enter_datetime = new Date(enter_datetime);
    }

    if (exit_datetime) {
      whereCondition.exit_datetime = new Date(exit_datetime);
    }

    return this.entities.find({
      where: whereCondition,
      order: { enter_datetime: 'ASC' },
    });
  }
}


// public async getSchedulesByTugboatAndOrderId(tugboatId: string, orderId: string): Promise<Schedule[]> {
//   return this.entities.find({
//     where: { 
//       tugboat_id: tugboatId,
//       order_id: orderId,
//     },
//     order: { enter_datetime: 'ASC' }
//   });
// }