import { ApiField } from 'src/common/decorator/api.decorator';
export class LoginRequest {
  @ApiField({
    type: String,
    example: 'admin@gmail.com',
    description: '유저 이메일',
  })
  email: string;

  @ApiField({
    type: String,
    example: '123123',
    description: '유저 비밀번호',
  })
  password: string;
}
