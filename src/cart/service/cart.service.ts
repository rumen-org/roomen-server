// import { Injectable } from '@nestjs/common';
// import { AddCartDto } from '../dto/add-cart.dto';
// import SuccessResponse from 'src/common/utils/success.response';
// import { CartRepository } from '../repository/cart.repository';
// import { UpdateCartDto } from '../dto/update-cart.dto';

// @Injectable()
// export class CartService {
//   constructor(private cartRepository: CartRepository) {}

//   async addToCart(
//     id: number,
//     addCartDto: AddCartDto,
//   ): Promise<SuccessResponse> {
//     const cart = await this.cartRepository.addCart(addCartDto);
//     cart.success = true;
//     return SuccessResponse.fromSuccess(true);
//   }

//   async changeOption(
//     id: number,
//     request: UpdateCartDto,
//   ): Promise<SuccessResponse> {
//     const cart = await this.cartRepository.updateCart(id, request);
//     if (cart.success) {
//       console.log(cart);
//     }

//     return SuccessResponse.fromSuccess(true);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entity/cart.entity';
import { Product } from 'src/product/entity/product.entity';
import { User } from 'src/auth/entity/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private cartRepository: Repository<Cart>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addToCart(
    userId: number,
    productId: number,
    quantity: number,
  ): Promise<Cart> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    const cart = new Cart();
    cart.user = user;
    cart.product = product;
    cart.quantity = quantity;

    return this.cartRepository.save(cart);
  }

  async updateCart(cartId: number, quantity: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({ where: { id: cartId } });
    cart.quantity = quantity;
    return this.cartRepository.save(cart);
  }

  async removeFromCart(cartId: number): Promise<void> {
    await this.cartRepository.delete(cartId);
  }

  async getCartItems(userId: number): Promise<Cart[]> {
    return this.cartRepository.find({
      where: { user: { id: userId } },
      relations: ['product'],
    });
  }
}
