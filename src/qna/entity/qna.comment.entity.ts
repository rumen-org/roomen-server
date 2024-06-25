import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Qna } from './qna.entity';

@Entity('comment')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext', nullable: false })
  content: string;

  @Column({ type: 'varchar', nullable: false })
  writer!: string;

  @Column({ type: 'timestamp', nullable: false })
  createdAt: Date;

  @Column({ type: 'varchar', nullable: false })
  image: string;

  @ManyToOne(() => Qna, (qna) => qna.comments)
  qna: Qna;
}
