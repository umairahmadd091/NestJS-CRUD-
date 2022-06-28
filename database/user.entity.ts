import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  static save<T>(newUser: User): User | PromiseLike<User> {
    throw new Error('Method not implemented.');
  }
  @Column
  name: string;

  @Column
  age: number;

  @Column
  city: string;
}
