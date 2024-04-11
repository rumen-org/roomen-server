import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';

export class MyPageResponse {
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

  @ApiNestedField({
    type: [String],
    example: ['신정n동 123-123 서울특별시 강서구'],
    description: '유저 배송지 정보',
  })
  addresses: string[];
}
