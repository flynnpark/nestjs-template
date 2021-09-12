import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BaseOutput, BaseResponse } from 'common/dtos/base-response';
import { AppService } from './app.service';

@ApiTags('home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    description: 'Home route',
    type: BaseResponse,
  })
  getHome(): BaseOutput<null> {
    return this.appService.getHome();
  }
}
