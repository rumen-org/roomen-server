import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';
import { CartRepository } from './repository/cart.repository';
import { TypeOrmExModule } from 'src/common/configs/typorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entity/product.entity';
import { ProductCart } from 'src/product/entity/product-cart.entity';
import { User } from 'src/auth/entity/user.entity';
import { Cart } from './entity/cart.entity';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([CartRepository]),
    TypeOrmModule.forFeature([Product, ProductCart, User, Cart]),
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
