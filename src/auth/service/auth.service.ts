import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRequest } from '../dto/request/create-user.dto';
import { AuthRepository } from '../repository/auth.repository';
import { User } from '../entity/user.entity';
import SuccessResponse from 'src/common/utils/success.response';
import * as bcrypt from 'bcrypt';
import { Token } from 'src/common/types/global.type';
import { LoginRequest } from '../dto/request/login-request.dto';

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

  async saveUser(authDTO: AuthRequest): Promise<SuccessResponse> {
    const { email } = authDTO;
    const existingUser = await this.authRepository.findOneBy({ email: email });
    //null 일 때 실행
    if (existingUser) {
      return { success: true, message: '이미 존재하는 이메일입니다.' };
    }
    const hashPassword = await this.hashPassword(authDTO.password);
    authDTO.password = hashPassword;
    await this.authRepository.createUser(authDTO);
    return { success: true };
  }

  async loginUser(loginDto: LoginRequest): Promise<Token> {
    const user = await this.authRepository.findOne({
      where: { email: loginDto.email },
    });

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!user || !isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.createToken(user.id);
    return { accessToken: token, userId: user.userId };
  }

  async checkExistingUser(user: User): Promise<void> {
    const auth = await this.authRepository.findOneBy({ userId: user.userId });

    if (!auth) {
      throw new UnauthorizedException();
    }
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 11);
  }
}
