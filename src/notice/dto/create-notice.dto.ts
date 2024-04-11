import { ApiField } from 'src/common/decorator/api.decorator';

export class CreateNoticeDto {
  @ApiField({
    type: Number,
    description: '글 id',
    nullable: false,
    example: 12,
  })
  id!: number;

  @ApiField({
    type: String,
    description: '유저 id',
    nullable: false,
    example: 12,
  })
  userId!: string;

  @ApiField({
    type: String,
    description: 'token',
    nullable: false,
  })
  accessToken!: string;

  @ApiField({
    type: String,
    description: '문의 카테고리',
    nullable: false,
  })
  category!: '배송' | '상품' | '기타' | '취소/교환/환불';

  @ApiField({
    type: String,
    description: '글제목',
    nullable: false,
  })
  title!: string;

  @ApiField({
    type: String,
    description: '문의 내용',
    nullable: false,
  })
  content!: string;

  @ApiField({
    type: String,
    description: '문의글 비밀빈호',
    nullable: false,
  })
  contentPassword!: string;
}
