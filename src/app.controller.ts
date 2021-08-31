import { Controller, Get } from '@nestjs/common';

import { BaseOutput } from 'common/interceptors/dtos/baseResponse.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): BaseOutput<null> {
    return this.appService.getHello();
  }
}
