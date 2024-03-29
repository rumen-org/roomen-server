import { ApiField, ApiNestedField } from 'src/common/decorator/api.decorator';
export class Cart {
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
    type: Number,
    example: 1400000,
    description: '배송비, 추가옵션을 포함한 총 가격',
  })
  totalPrice: number;

  @ApiField({
    type: Date,
    example: '2021-08-01T00:00:00.000Z',
    description: '주문일자',
  })
  orderDate: Date;

  @ApiField({
    type: String,
    example: '202184810981',
    description: '주문번호',
  })
  orderNumber: string;

  @ApiNestedField({
    type: String,
    example: '상품준비중, 주문접수.... ',
    description: '현재 주문의 상태를 확인할 수 있다.',
  })
  orderState: '주문접수' | '입금확인' | '배송 준비중' | '배송 중' | '배송 완료';
}
