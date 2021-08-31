import { ApiProperty } from '@nestjs/swagger';

export class BaseOutput<T> {
  @ApiProperty({ nullable: true })
  message?: string | null;

  @ApiProperty({ nullable: true })
  result?: T | null;
}

export class BaseResponse<T> extends BaseOutput<T> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  path: string;
}
