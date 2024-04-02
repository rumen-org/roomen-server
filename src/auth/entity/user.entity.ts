import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: String, nullable: false })
  name!: string;

  @Column({ type: String, nullable: false })
  userId!: string;

  @Column({ type: String, nullable: false })
  email!: string;

  @Column({ type: 'varchar', array: true, nullable: false })
  address!: string[];


  @Column({ type: String, nullable: true })
  expires!: Date;


  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
