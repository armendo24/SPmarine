import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import entity classes explicitly
import { Order } from '../entities/order.entity';
import { Barge } from '../entities/barge.entity';
import { Carrier } from '../entities/carrier.entity';
import { Cost } from '../entities/cost.entity';
import { Customer } from '../entities/customer.entity';
import { Station } from '../entities/station.entity';
import { Tugboat } from '../entities/tugboat.entity';
import { Schedule } from '@/entities/schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: process.env.DB_HOST || '62.72.30.12',
      // port: Number(process.env.DB_PORT) || 18306,
      // username: process.env.DB_USER || 'maria',
      // password: process.env.DB_PASSWORD || 'password',
      // database: process.env.DB_NAME || 'spinterdb',

      host: '45.82.72.96',
      port: 3306,
      username: 'spmarine_maria',
      password: 'P@ssw0rd12345',
      database: 'spmarine_db',
      entities: [
        Order,
        Barge,
        Carrier,
        Cost,
        Customer,
        Schedule,
        Station,
        Tugboat,
      ],
      synchronize: false, // Set to false for production
      logging: true, // Enable logging to see connection details
      // extra: {
        // Additional MySQL driver options
        // connectionLimit: 10,
        // charset: 'utf8mb4',
        // connectTimeout: 120000, // Increase MySQL driver timeout to 120 seconds
      // },
      ssl: false, // Disable SSL requirement completely
      // retryAttempts: 10, // Increase retry attempts
      // retryDelay: 5000, // Increase delay between retries
      // connectTimeout: 120000, // Increase TypeORM connect timeout to 120 seconds
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}