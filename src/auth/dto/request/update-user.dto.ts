import { ApiField } from 'src/common/decorator/api.decorator';
export class UpdateUserRequest {
  @ApiField({
    type: String,
    example: '12',
    description: '아이디',
  })
  id: string;

  @ApiField({
    type: String,
    example: '김인태',
    description: '유저 이름',
  })
  name: string;

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

  @ApiField({
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
    description: '회원가입 날짜',
  })
  createdAt!: Date;

  @ApiField({
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
    description: '수정 날짜',
  })
  updatedAt!: Date;
}
