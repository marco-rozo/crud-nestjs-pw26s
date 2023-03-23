import { User } from '../users/entities/user.entity';
import 'reflect-metadata';
import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'crud_seminario_pw',
  synchronize: true,
  logging: false,
  // entities: [User],
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/migration/*.ts'],
  subscribers: [],
};
