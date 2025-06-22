import { Module } from '@nestjs/common';

import { BargeModule } from './barge.module';
import { CarrierModule } from './carrier.module';
import { CostModule } from './cost.module';
import { CustomerModule } from './customer.module';
import { DatabaseModule } from './database.module';
import { OrderModule } from './order.module';
import { ScheduleModule } from './schedule.module';
import { StationModule } from './station.module';
import { TugboatModule } from './tugboat.module';

@Module({
  imports: [
    DatabaseModule,
    BargeModule,
    CarrierModule,
    CustomerModule,
    StationModule,
    CostModule,
    OrderModule,
    TugboatModule,
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
