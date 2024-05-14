import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UserService } from './service/user.service';
import { JwtStrategy } from 'src/common/jwt/jwt.strategy';
import { TypeOrmExModule } from 'src/common/configs/typorm.module';
import { AuthRepository } from './repository/auth.repository';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([AuthRepository, UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '300m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy],
  exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
