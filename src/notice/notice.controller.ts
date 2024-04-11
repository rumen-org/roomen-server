import { Body, Controller } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { PostApi } from 'src/common/decorator/api.decorator';
import { CreateNoticeDto } from './dto/create-notice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  //빈 오브젝트에는 payment dto가 들어감.
  @PostApi(() => {}, {
    path: '/create',
    description: '결제 생성',
    auth: true,
  })
  createNotice(@Body() createNoticeDto: CreateNoticeDto) {
    return this.noticeService.createNotice(createNoticeDto);
  }
}
