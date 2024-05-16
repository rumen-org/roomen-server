import { ApiField } from 'src/common/decorator/api.decorator';
export class UpdateUserRequest {
  @ApiField({
    type: String,
    example: '1af5fafd-f399-477d-b371-0f0dfa46caa3',
    description: 'userID',
  })
  userId: string;

  @ApiField({
    type: String,
    example: '김인태',
    description: '유저 이름',
    nullable: true,
  })
  name: string;

  @ApiField({
    type: String,
    example: '123123',
    description: '바꿀 유저의 비밀번호',
    nullable: true,
  })
  password: string;

  @ApiField({
    type: String,
    example: 'admin@gmail.com',
    description: '유저 이메일',
    nullable: true,
  })
  email: string;

  @ApiField({
    type: String,
    example: '010-6856-7378',
    description: '바꿀 유저 전화번호',
    nullable: true,
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
