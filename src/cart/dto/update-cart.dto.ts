import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';
export class UpdateCartDto {
  @ApiField({
    type: Number,
    example: '1231200dd',
    description: '사용자 아이디',
  })
  userId: string;

  @ApiField({
    type: Number,
    example: 1,
    description: '상품 아이디',
  })
  id: number;

  @ApiField({
    type: Number,
    example: 1,
    description: '상품의 수량',
  })
  quantity: number;

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

  getAuthFields() {
    return {
      userId: this.userId,
    };
  }
}
