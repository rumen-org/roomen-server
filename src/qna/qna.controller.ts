import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostApi } from 'src/common/decorator/api.decorator';
import { QnaService } from './qna.service';

@ApiTags('qna')
@Controller('qna')
export class QnaController {
  constructor(private qnaService: QnaService) {}

  /** admin 타입인지 체크하는 로직 필요. */
  @PostApi(() => {}, {
    path: '/create',
    description: '공지사항 작성',
    auth: true,
  })
  createQna() {}
}
