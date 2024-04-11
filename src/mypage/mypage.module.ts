import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/service/auth.service';
import { UserService } from 'src/auth/service/user.service';
import { MypageService } from './mypage.service';
import { JwtService } from '@nestjs/jwt';
import { MyPageController } from './mypage.controller';

@Module({
  imports: [],
  controllers: [MyPageController],
  providers: [MypageService],
})
export class MyPageModule {}
