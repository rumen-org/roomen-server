import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const entityArray = [];

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
