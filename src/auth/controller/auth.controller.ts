import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { AuthRequest } from '../dto/request/create-user.dto';
import { User } from '../dto/request/user.dto';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';
import { UserService } from './../service/user.service';
import { Token } from './../security/token.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @PatchApi(() => User, {
    path: '/modify/:id',
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

  @PostApi(() => User, {
    path: '/create',
    description: '유저 생성',
    auth: false,
  })
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
  async createUser(@Body() authDTO: AuthRequest) {
    return this.authService.saveUser(authDTO);
  }

  @PostApi(() => User, {
    path: '/login',
    description: '유저 로그인',
    auth: false,
  })
  @ApiOperation({ summary: '유저 로그인', description: '유저 로그인' })
  @ApiCreatedResponse({
    description: '로그인합니다. 토큰을 반환합니다.',
    type: String,
  })
  async loginUser(@Body() authDTO: AuthRequest): Promise<Token> {
    return this.authService.loginUser(authDTO);
  }
}
