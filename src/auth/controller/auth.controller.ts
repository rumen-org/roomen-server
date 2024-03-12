import { Body, Controller, Post, Get, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { Token } from 'src/common/types/global.type';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { PatchApi } from 'src/common/decorator/api.decorator';
import { User } from '../dto/request/user.dto';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import SuccessResponse from 'src/common/utils/success.response';
import { CreateUserRequest } from '../dto/request/create-user.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @PatchApi(() => User, {
    path: '/modify',
    description: '유저 정보 수정',
    auth: true,
  })
  updateUser(
    @Param() id: number,
    @Body() request: UpdateUserRequest,
  ): Promise<SuccessResponse> {
    //TODO : accessTOken type설정
    console.log(request, '업데이트를 한다 ..');
    return this.userService.updateUser(id, request);
  }
  // Todo: 처음에 유저정보만 가지고 create -> register채워서 update
  @Post()
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
  @ApiCreatedResponse({
    description: '유저를 생성한다.',
    type: CreateUserRequest,
  })
  async createUser(@Body() authDTO: CreateUserRequest): Promise<Token> {
    console.log('hihi', authDTO);
    return this.authService.saveUser(authDTO);
  }
}
