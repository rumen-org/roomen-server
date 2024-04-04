import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';

@Module({
  imports: [],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
