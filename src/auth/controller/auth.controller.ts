import { Body, Controller, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { CreateUserRequest } from '../dto/request/create-user.dto';
import { User } from '../dto/request/user.dto';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import SuccessResponse from 'src/common/utils/success.response';
import { PatchApi, PostApi } from 'src/common/decorator/api.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
    return this.authService.updateUser(id, request);
  }

  @PostApi(() => User, {
    path: '/create',
    description: '유저 생성',
    auth: false,
  })
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
  @ApiCreatedResponse({
    description: '유저를 생성한다.',
    type: CreateUserRequest,
  })
  async createUser(@Body() authDTO: CreateUserRequest) {
    console.log('hihi', authDTO);
    return this.authService.saveUser(authDTO);
  }
}
