import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { Token } from 'src/common/types/global.type';
import { User } from '../dto/request/user.dto';
import { CreateUserRequest } from '../dto/request/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

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

  //   async validate(payload: { id: number }) {
  //     const { id } = payload;
  //     const auth: User = await ;
  //     if (!auth) throw new UnauthorizedException();
  //     return auth;
  //   }

  async saveUser(authDTO: CreateUserRequest): Promise<Token> {
    const user = await this.authRepository.findOneBy({
      userId: authDTO.id,
    });

    if (user) {
      const accessToken = await this.createToken(user.id);

      const userId = user.userId;

      return { accessToken, userId: userId };
    }

    const newUser = await this.authRepository.createUser(authDTO);
    const accessToken = await this.createToken(newUser.id);
    const userId = newUser.userId;
    return { accessToken, userId };
  }

  // 유저 확인. 다른곳들에도 쓰임 에러처리도 여기서하면 다른곳에서 사용할때 일일이 에러처리 안해도됨
  // Todo: checktExistingUser 문제 있음 수정 필요.

  async checkExistingUser(user: User): Promise<void> {
    const auth = await this.authRepository.findOneBy({ userId: user.userId });

    if (!auth) {
      throw new UnauthorizedException();
    }
  }
}
