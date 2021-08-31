import { Controller, Get } from '@nestjs/common';

import { BaseOutput } from 'common/dtos/base-response';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): BaseOutput<null> {
    return this.appService.getHello();
  }
}
