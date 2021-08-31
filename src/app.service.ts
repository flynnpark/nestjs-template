import { Injectable } from '@nestjs/common';

import { BaseOutput } from 'common/interceptors/dtos/base-response';

@Injectable()
export class AppService {
  getHello(): BaseOutput<null> {
    return { message: 'NestJS template' };
  }
}
