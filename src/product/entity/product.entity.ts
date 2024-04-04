import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', nullable: false })
  name!: string;

  @Column({ type: 'decimal', nullable: false })
  price!: number;

  @Column({ type: 'varchar', nullable: false })
  category!: string; // 상품의 카테고리 혹은 유형

  @Column({ type: 'json', nullable: true })
  attributes!: any; // 상품의 추가적인 속성을 저장하는 JSON 타입 컬럼
}
