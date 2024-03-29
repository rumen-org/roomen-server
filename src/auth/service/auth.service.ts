import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserRequest } from '../dto/request/create-user.dto';
import { Supabase } from 'src/common/supabase/supabase';
import { UpdateUserRequest } from '../dto/request/update-user.dto';
import SuccessResponse from 'src/common/utils/success.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: Supabase,
    private jwtService: JwtService,
  ) {}

  async createToken(id: number): Promise<string> {
    const payload = { id };
    const token = this.jwtService.sign(payload);
    return token;
  }

  async refreshToken(id: number): Promise<string> {
    const payload = { id };
    const token = this.jwtService.sign(payload, { expiresIn: '30d' });
    return token;
  }

  // async validate(payload: { id: number }) {
  //   const { id } = payload;
  //   const auth: User = await this.supabaseService.selectQuery(
  //     'auth',
  //     'id, userId, email, nickname, profile',
  //   );
  //   if (!auth) throw new UnauthorizedException();
  //   return auth;
  // }

  async saveUser(authDTO: CreateUserRequest) {
    const { data: user } = await this.supabase
      .getClient()
      .from('users')
      .select(authDTO.email);

    console.log(user, 'user');
    if (user) {
      return {
        data: '이미 존재하는 이메일입니다. 아이디 찾기를 통해서 찾아주세요!',
      };
    }

    const { data, error } = await this.supabase.getClient().auth.signUp({
      email: authDTO.email,
      password: authDTO.password,
      options: {
        data: {
          id: authDTO.id,
          phone: authDTO.phone,
          name: authDTO.name,
        },
      },
    });

    console.log(data.user.id, 'id');
    const accessToken = await this.createToken(Number(data.user.id));

    if (error) {
      throw new UnauthorizedException();
    }

    return { data, accessToken };
  }

  async updateUser(id: number, authDTO: UpdateUserRequest) {
    const { data, error } = await this.supabase
      .getClient()
      .from('users')
      .update({
        email: authDTO.email,
        password: authDTO.password,
        options: {
          data: {
            id,
            phone: authDTO.phone,
            name: authDTO.name,
          },
        },
      })
      .eq('id', authDTO.id);
    console.log(data, error);

    if (error) {
      throw new UnauthorizedException();
    }

    return SuccessResponse.fromSuccess(true);
  }
}
