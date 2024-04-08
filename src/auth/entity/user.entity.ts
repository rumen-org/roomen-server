import { Cart } from 'src/cart/entity/cart.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

type Address = {
  address: string;
};
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String, nullable: false })
  password!: string;

  @Column({ type: String, nullable: false })
  name!: string;

  @Column({ type: String, nullable: false })
  userId!: string;

  @Column({ type: String, nullable: false })
  email!: string;

  @Column({ type: String, nullable: false })
  phone!: string;

  @Column({ type: 'json', nullable: false })
  address!: Address;

  @OneToOne(() => Cart, (cart) => cart.user)
  @JoinColumn()
  cart!: string[];

  @Column({ type: Date, nullable: true })
  expires!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
