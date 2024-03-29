import { Cart } from 'src/cart/dto/cart.dto';
import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';
export class User {
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

  @ApiNestedField({
    type: Cart,
    example: '유저의 장바구니 정보',
    description: '유저의 장바구니 정보가 들어있습니다. 수량, 색상 등..',
  })
  cart: Cart;

  @ApiNestedField({
    type: [String],
    example: ['신정n동 123-123 서울특별시 강서구'],
    description: '유저 배송지 정보',
  })
  addresses: string[];

  @ApiField({
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
    description: '회원가입 날짜',
  })
  createdAt: Date;

  @ApiField({
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
    description: '수정 날짜',
  })
  updatedAt: Date;
}
