import { Cart } from 'src/cart/entity/cart.entity';
import {
  BaseEntity,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductCart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int' })
  quantity!: number; // 장바구니에 담긴 아이템의 수량

  @ManyToOne(() => Cart, (cart) => cart.productCart)
  cart!: Cart;

  @ManyToOne(() => Product, (product) => product.id)
  product!: Product;
}
