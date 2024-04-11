import { Injectable } from '@nestjs/common';
import { MyPageRequest } from './request/mypage.request';
import { MyPageResponse } from './response/mypage.response';

@Injectable()
export class MypageService {
  async getUserInfo(request: MyPageRequest) {
    console.log(request);
  }
}
