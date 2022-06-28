import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../database/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userProvider: typeof User,
  ) {}

  async findAll() {
    return this.userProvider.findAll<User>();
  }

  async insert(user: any) {
    try {
      return await this.userProvider.create(user);
    } catch (err) {
      return err;
    }
  }

  async delete(id: string) {
    try {
      return await this.userProvider.destroy({ where: { id } });
    } catch (err) {
      return err;
    }
  }

  async update(updated_values: any, id: string) {
    try {
      return await this.userProvider.update(updated_values, { where: { id } });
    } catch (err) {
      return err;
    }
  }
}
