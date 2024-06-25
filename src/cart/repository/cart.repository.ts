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
    userId: string,
    request: UpdateCartDto,
  ): Promise<SuccessResponse> {
    const cart = await this.update(userId, request);
    console.log(cart);
    return { success: true, message: '카트가 업데이트 되었습니다.' };
  }
}
