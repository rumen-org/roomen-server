import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostApi } from 'src/common/decorator/api.decorator';
import { QnaService } from './qna.service';
import { CreateQnaRequestDTO } from './request/create-qna.request.dto';
import SuccessResponse from 'src/common/utils/success.response';

@ApiTags('qna')
@Controller('qna')
export class QnaController {
  constructor(private qnaService: QnaService) {}
  @PostApi(() => {}, {
    path: '/create',
    description: '공지사항 작성',
    auth: true,
  })
  createQna(@Body() request: CreateQnaRequestDTO): Promise<SuccessResponse> {
    console.log(request, 'controller');
    return this.qnaService.createQna(request);
  }
}
