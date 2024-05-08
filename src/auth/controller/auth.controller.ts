import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { AuthRequest } from '../dto/request/create-user.dto';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';
import { UserService } from './../service/user.service';
import { Token } from './../security/token.interface';
import { LoginRequest } from '../dto/request/login-request.dto';
import { User } from '../entity/user.entity';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @PatchApi(() => {}, {
    path: '/modify/:id',
    description: '유저 정보 수정',
    auth: true,
  })
  @ApiResponse({
    status: 200,
    description: '정보 수정 성공 여부 및 메세지.',
    schema: {
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
      },
    },
  })
  updateUser(
    @Param() id: number,
    @Body() request: UpdateUserRequest,
  ): Promise<SuccessResponse> {
    //TODO : accessTOken type설정
    console.log(request, '업데이트를 한다 ..');
    return this.userService.updateUser(id, request);
  }

  @PostApi(() => {}, {
    path: '/create',
    description: '회원가입',
    auth: false,
  })
  @ApiOperation({ summary: '회원가입', description: '회원가입' })
  @ApiResponse({
    status: 200,
    description: '정보 수정 성공 여부 및 메세지.',
    schema: {
      properties: {
        success: { type: 'boolean' },
        message: { type: 'string' },
      },
    },
  })
  async createUser(@Body() authDTO: AuthRequest) {
    return this.authService.saveUser(authDTO);
  }

  @PostApi(() => User, {
    path: '/login',
    description: '유저 로그인',
    auth: false,
  })
  @ApiOperation({ summary: '유저 로그인', description: '유저 로그인' })
  @ApiResponse({
    status: 200,
    description: '로그인합니다. 토큰을 반환합니다.',
    schema: {
      properties: {
        accessToken: { type: 'string' },
        userId: { type: 'string' },
      },
    },
  })
  async loginUser(@Body() authDTO: LoginRequest): Promise<Token> {
    return this.authService.loginUser(authDTO);
  }
}
