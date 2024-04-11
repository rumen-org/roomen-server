import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';

@Injectable()
export class NoticeService {
  constructor() {}

  async createNotice(createNoticeDto: CreateNoticeDto) {
    console.log(createNoticeDto);
    return createNoticeDto;
  }
}
