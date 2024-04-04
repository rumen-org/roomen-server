import { User } from 'src/auth/entity/user.entity';
import { ProductCart } from 'src/product/entity/product-cart.entity';
import {
  BaseEntity,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.cart)
  @JoinColumn()
  user!: User;

  @OneToMany(() => ProductCart, (productCart) => productCart.cart)
  productCart: ProductCart[];
}
