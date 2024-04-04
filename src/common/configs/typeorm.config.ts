import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entity/user.entity';
import { Cart } from 'src/cart/entity/cart.entity';
import { ProductCart } from 'src/product/entity/product-cart.entity';
import { Product } from 'src/product/entity/product.entity';

const entityArray = [Cart, User, ProductCart, Product];

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  database: 'roomen',
  password: process.env.DB_PASSWORD,
  entities: entityArray,
  synchronize: true,
  timezone: '+09:00',
  logging: true,
};
