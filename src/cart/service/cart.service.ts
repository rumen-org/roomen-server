import { Injectable } from '@nestjs/common';
import { AddCartDto } from '../dto/add-cart.dto';
import SuccessResponse from 'src/common/utils/success.response';
import { CartRepository } from '../repository/cart.repository';
import { UpdateCartDto } from '../dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private cartRepository: CartRepository) {}

  async addToCart(
    id: number,
    addCartDto: AddCartDto,
  ): Promise<SuccessResponse> {
    const cart = await this.cartRepository.addCart(addCartDto);
    cart.success = true;
    return SuccessResponse.fromSuccess(true);
  }

  async changeOption(
    id: number,
    request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    const cart = await this.cartRepository.updateCart(id, request);
    if (cart.success) {
      console.log(cart);
    }

    return SuccessResponse.fromSuccess(true);
  }
}
