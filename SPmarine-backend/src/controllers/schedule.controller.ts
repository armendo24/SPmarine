import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpException,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';

import { ScheduleService } from '@/services/schedule.service';
// import { Schedule } from '@/entities/schedule.entity';
 

@Controller('/v1/schedules')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) { }


  @Get('/')
  public async getSchedules() {
    try {
      return this.service.getSchedules();
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          response: e.message ?? 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

 
  @Get('tugboat/:tugboatId/order/:orderId')
  public async getSchedulesByTugboatAndOrderId(
    @Param('tugboatId') tugboatId: string,
    @Param('orderId') orderId: string,
    @Query('enter_datetime') enter_datetime?: string,
    @Query('exit_datetime') exit_datetime?: string,
  ) {
    const parameter = {
      tugboatId,
      orderId,
      enter_datetime,
      exit_datetime,
    };

    try {
      const schedules = await this.service.getSchedulesByTugboatAndOrderId(
        tugboatId,
        orderId,
        enter_datetime,
        exit_datetime,
      );
      return {
        success: true,
        message: 'Schedules for tugboat and order retrieved successfully',
        status: HttpStatus.OK,
        parameter: parameter,
        dataLength:schedules?.length || 0,
        data: schedules,
      };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          response: e.message ?? 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('tugboat/:tugboatId')
  public async getSchedulesByTugboatId(@Param('tugboatId') tugboatId: string) {
    try {
      const schedules = await this.service.getSchedulesByTugboatId(tugboatId);
      return {
        success: true,
        data: schedules,
        message: 'Tugboat schedules retrieved successfully',
        status: HttpStatus.OK
      };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          response: e.message ?? 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('order/:orderId')
  public async getSchedulesByOrderId(@Param('orderId') orderId: string) {
    try {
      const schedules = await this.service.getSchedulesByOrderId(orderId);
      return {
        success: true,
        data: schedules,
        message: 'Order schedules retrieved successfully',
        status: HttpStatus.OK
      };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          response: e.message ?? 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
 
}
