import { CustomRepository } from 'src/common/configs/typeorm.decorator';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AddCartDto } from '../dto/add-cart.dto';
import { Cart } from '../entity/cart.entity';

@CustomRepository(User)
export class CartRepository extends Repository<Cart> {
  async addCart(addCartDto: AddCartDto): Promise<Cart> {
    const {} = addCartDto;
  }
}
