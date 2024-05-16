import { ApiField } from 'src/common/decorator/api.decorator';
export class AuthRequest {
  @ApiField({
    type: String,
    example: '김인태',
    description: '유저 이름',
  })
  name: string;

  @ApiField({
    type: String,
    example: '123123',
    description: '유저 비밀번호',
  })
  password: string;

  @ApiField({
    type: String,
    example: 'admin@gmail.com',
    description: '유저 이메일',
  })
  email: string;

  @ApiField({
    type: String,
    example: '010-1111-1111',
    description: '유저 전화번호',
  })
  phone: string;
}
