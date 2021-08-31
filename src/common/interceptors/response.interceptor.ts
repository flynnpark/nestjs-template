import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';

import { BaseOutput, BaseResponse } from './dtos/base-response';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<BaseOutput<T>, BaseResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<BaseOutput<T>>,
  ): Observable<BaseResponse<T>> {
    const request: Request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        path: request.path,
        message: data.message || null,
        result: data.result || null,
      })),
    );
  }
}
