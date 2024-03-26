import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { JwtService } from '@nestjs/jwt';
import { CreateUserRequest } from '../dto/request/create-user.dto';
import { Supabase } from 'src/common/supabase/supabase';

@Injectable()
export class AuthService {
  constructor(private readonly supabase: Supabase) {}

  // async createToken(id: number): Promise<string> {
  //   const payload = { id };
  //   const token = this.jwtService.sign(payload);
  //   return token;
  // }

  // async refreshToken(id: number): Promise<string> {
  //   const payload = { id };
  //   const token = this.jwtService.sign(payload, { expiresIn: '30d' });
  //   return token;
  // }

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

    console.log(data, error);
    if (error) {
      throw new UnauthorizedException();
    }
  }

  // 유저 확인. 다른곳들에도 쓰임 에러처리도 여기서하면 다른곳에서 사용할때 일일이 에러처리 안해도됨
  // Todo: checktExistingUser 문제 있음 수정 필요.

  // async checkExistingUser(user: User): Promise<void> {
  //   const auth = await this.authRepository.findOneBy({ userId: user.userId });

  //   if (!auth) {
  //     throw new UnauthorizedException();
  //   }
  // }
}
