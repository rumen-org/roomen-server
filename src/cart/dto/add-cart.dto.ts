import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';
export class AddCartDto {
  @ApiField({
    type: String,
    example: 'red',
    description: '색상1 : 상판 하부다리, 후면가림판 색상',
  })
  color1: string;

  @ApiField({
    type: String,
    example: 'red',
    description: '색상2 : 건반트레이, 다리, 상단선반, 칸막이',
  })
  color2: string;

  @ApiField({
    type: Number,
    example: 1,
    description: '미디 데스크 수량',
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

  @ApiField({
    type: String,
    example: 'aksjdlkajsdlj9ajsdlijw',
    description: 'jwt 토큰',
  })
  accessToken: string;
}
