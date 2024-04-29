import { Cart } from 'src/cart/entity/cart.entity';
import { Notice } from 'src/notice/entity/notice.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

type Address = {
  address: string;
};
@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String, nullable: false })
  password!: string;

  @Column({ type: String, nullable: false })
  name!: string;

  @Column({ type: String, nullable: false })
  @Generated('uuid')
  userId!: string;

  @Column({ type: String, nullable: false })
  @IsEmail
  email!: string;

  @Column({ type: String, nullable: false })
  phone!: string;

  @Column({ type: 'json', nullable: false })
  address!: Address;

  @OneToMany(() => Notice, (notice) => notice.user)
  @JoinColumn()
  notice: Notice;

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
