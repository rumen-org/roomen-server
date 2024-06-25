import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from './qna.comment.entity';

@Entity('qna')
export class Qna extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  category: '배송' | '상품' | '취소/교환/환불' | '기타';

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  writer!: string;

  @Column({ type: 'longtext', nullable: false })
  content!: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'boolean', nullable: false })
  secret: boolean;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  image!: string;

  @OneToMany(() => Comment, (comment) => comment.qna)
  comments!: Comment[];
}
