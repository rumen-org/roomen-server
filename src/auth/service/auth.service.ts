import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserRequest } from '../dto/request/create-user.dto';
import { AuthRepository } from '../repository/auth.repository';
import { Token } from '../security/token.interface';
import { User } from '../entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
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

  async saveUser(authDTO: CreateUserRequest): Promise<Token> {
    const user = await this.authRepository.findOneBy({
      userId: String(authDTO.id),
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

  async checkExistingUser(user: User): Promise<void> {
    const auth = await this.authRepository.findOneBy({ userId: user.userId });

    if (!auth) {
      throw new UnauthorizedException();
    }
  }
}
