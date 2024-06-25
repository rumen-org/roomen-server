import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Cart } from 'src/cart/entity/cart.entity';
import { Notice } from 'src/notice/entity/notice.entity';
import { ProductCart } from 'src/product/entity/product-cart.entity';
import { Product } from 'src/product/entity/product.entity';
import { Comment } from 'src/qna/entity/qna.comment.entity';
import { Qna } from 'src/qna/entity/qna.entity';

const entityArray = [Cart, User, ProductCart, Product, Notice, Qna, Comment];

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  database: 'roomen',
  password: 'root',
  entities: entityArray,
  synchronize: true,
  timezone: '+09:00',
  logging: true,
};
