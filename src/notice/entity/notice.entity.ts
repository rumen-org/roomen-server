import { User } from 'src/auth/entity/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Notice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.notice)
  @JoinColumn()
  user!: User;

  @Column({ type: String, nullable: false })
  title!: string;

  @Column({ type: String, nullable: false })
  content!: string;

  @Column({ type: String, nullable: false })
  accessToken!: string;

  @Column({ type: String, nullable: false })
  category!: string;

  @Column({ type: String, nullable: false })
  contentPassword!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}
