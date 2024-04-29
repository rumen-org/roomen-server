import { ApiField } from 'src/common/decorator/api.decorator';
export class AuthRequest {
  @ApiField({
    type: String,
    example: '102983-019938019-1039',
    description: '아이디',
  })
  userId: string;

  @ApiField({
    type: String,
    example: '김인태',
    description: '유저 이름',
  })
  name: string;

  @ApiField({
    type: String,
    example: 'aisjdoij',
    description: '유저 비밀번호',
  })
  password: string;

  @ApiField({
    type: String,
    example: 'bgh9651@gmail.com',
    description: '유저 이메일',
  })
  email: string;

  @ApiField({
    type: String,
    example: '010-6856-7378',
    description: '유저 전화번호',
  })
  phone: string;
}
