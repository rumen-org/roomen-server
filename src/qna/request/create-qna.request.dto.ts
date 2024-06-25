import { ApiField } from 'src/common/decorator/api.decorator';

export class CreateQnaRequestDTO {
  @ApiField({
    type: String,
    example: '배송',
    description:
      '배송, 상품, 취소/교환/환불, 기타 등의 qna 게시글 분류를 한다. enum으로 구성되어있다.',
  })
  category: '배송' | '상품' | '취소/교환/환불' | '기타';

  @ApiField({
    type: '글 제목',
    example: '글 제목1',
    description: 'qna 글에 대한 제목입니다.',
  })
  title: string;

  @ApiField({
    type: String,
    example: '',
    description: '제품이름',
  })
  content: string;

  @ApiField({
    type: String,
    example: '이미지 링크',
    description: 'http://....',
  })
  image!: string;

  @ApiField({
    type: Boolean,
    example: false,
    description: '비밀글 유무',
  })
  secret: boolean;
}
