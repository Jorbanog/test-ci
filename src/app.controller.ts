import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('create')
  async create() {
    return this.appService.create();
  }

  @Get('findall')
  async find() {
    return this.appService.getAll();
  }
}
