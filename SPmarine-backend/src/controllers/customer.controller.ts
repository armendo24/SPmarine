import {
  Controller,
  Get,
  HttpStatus,
  HttpException,
  Param,
  Put,
  Body,
} from '@nestjs/common';

import { CustomerService } from '@/services/customer.service';
import { Customer } from '@/entities/customer.entity';

@Controller('/v1/customers')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Get('/')
  public async getCustomers() {
    try {
      return this.service.getCustomers();
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

  @Get(':id')
  public async getCustomerById(@Param('id') id: string) {
    try {
      return this.service.getCustomerById(id);
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

  @Put(':id')
  public async updateCustomer(@Param('id') id: string, @Body() body: Customer) {
    try {
      await this.service.updateCustomer(id, body);

      return { message: '', status: HttpStatus.OK };
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

  /* @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadCsv(
    @UploadedFile() csv: Express.Multer.File,
  ): Promise<{ success: boolean; data: Order[] }> {
    if (!csv)
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);

    try {
      const data = await this.service.upload(csv.buffer);

      return { success: true, data: data };
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          response: e.message ?? 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  } */
}
