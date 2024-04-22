import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';
import { CartRepository } from './repository/cart.repository';
import { TypeOrmExModule } from 'src/common/configs/typorm.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([CartRepository])],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
