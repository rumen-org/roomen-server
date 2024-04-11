import { Injectable } from '@nestjs/common';
import { AddCartDto } from '../dto/add-cart.dto';

@Injectable()
export class CartService {
  constructor() {}

  async addToCart(addCartDto: AddCartDto) {
    return addCartDto;
  }

  async changeOption() {}
}
