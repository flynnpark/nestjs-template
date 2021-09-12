import { ApiProperty, PickType } from '@nestjs/swagger';

export class BaseResponse<T = any> {
  @ApiProperty({ example: 'true' })
  success: boolean;

  @ApiProperty({ example: '/' })
  path: string;

  @ApiProperty({ nullable: true, example: '메세지' })
  message?: string | null;

  @ApiProperty({ nullable: true, example: null })
  result?: T | null;
}

export class BaseOutput<T> extends PickType<BaseResponse, 'message'>(
  BaseResponse,
  ['message'],
) {
  result?: T | null;
}
