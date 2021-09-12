import { Injectable } from '@nestjs/common';

import { BaseOutput } from 'common/dtos/base-response';

@Injectable()
export class AppService {
  getHome(): BaseOutput<null> {
    return { message: 'NestJS template' };
  }
}
