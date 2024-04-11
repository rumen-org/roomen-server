import { ApiField } from 'src/common/decorator/api.decorator';

export class MyPageRequest {
  @ApiField({
    type: Number,
    description: 'userId',
    nullable: false,
    example: 12,
  })
  userId!: string;

  @ApiField({
    type: String,
    description: 'token',
    nullable: false,
  })
  accessToken!: string;
}
