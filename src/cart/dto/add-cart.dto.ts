import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';
export class AddCartDto {
  @ApiField({
    type: Number,
    example: 1,
    description: '제품 아이디',
  })
  id: number;

  @ApiField({
    type: String,
    example: '',
    description: '제품이름',
  })
  name: string;

  @ApiNestedField({
    type: [String],
    example: ['스피커', '서랍'],
    description: '데스크의 추가적인 옵션',
  })
  additionalOption: string[];

  @ApiField({
    type: String,
    example: 1400000,
    description: '배송비, 추가옵션을 포함한 총 가격',
  })
  totalPrice: string;

  @ApiField({
    type: String,
    example: 'aksjdlkajsdlj9ajsdlijw',
    description: 'jwt 토큰',
  })
  accessToken: string;
}
