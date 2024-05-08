import { ApiField } from 'src/common/decorator/api.decorator';
export class UpdateUserRequest {
  @ApiField({
    type: String,
    example: '12',
    description: '유저 아이디',
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
    example: 'alsidhaishdk',
    description: '유저 비밀번호',
    nullable: true,
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

  getAuthFields() {
    return {
      userId: this.userId,
      email: this.email,
      name: this.name,
      password: this.password,
    };
  }
}
