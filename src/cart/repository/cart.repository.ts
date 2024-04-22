import { CustomRepository } from 'src/common/configs/typeorm.decorator';
import { Repository } from 'typeorm';
import { AddCartDto } from '../dto/add-cart.dto';
import { Cart } from '../entity/cart.entity';
import SuccessResponse from 'src/common/utils/success.response';
import { UpdateCartDto } from '../dto/update-cart.dto';

@CustomRepository(Cart)
export class CartRepository extends Repository<Cart> {
  async addCart(request: AddCartDto): Promise<SuccessResponse> {
    const cart = await this.save(request);
    console.log(cart);
    return { success: true };
  }

  async updateCart(
    id: number,
    request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    const cart = await this.update(id, request);
    console.log(cart);
    return { success: true };
  }
}
