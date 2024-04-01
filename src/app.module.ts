import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/controller/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './common/supabase/supabase.module';
import { CartModule } from './cart/cart.module';
import { CartController } from './cart/controller/cart.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    SupabaseModule,
    CartModule,
  ],
  controllers: [AppController, AuthController, CartController],
  providers: [AppService],
})
export class AppModule {}
