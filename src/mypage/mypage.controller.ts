import { Body, Controller } from '@nestjs/common';
import { GetApi } from 'src/common/decorator/api.decorator';
import { User } from './../auth/dto/request/user.dto';
import { MypageService } from './mypage.service';
import { MyPageRequest } from './request/mypage.request';

@Controller('mypage')
export class MyPageController {
  constructor(private mypageService: MypageService) {}

  @GetApi(() => User, {
    path: '/',
    description: '유저 정보 수정',
    auth: true,
  })
  async getUserInfo(@Body() request: MyPageRequest): Promise<void> {
    return this.mypageService.getUserInfo(request);
  }
}
