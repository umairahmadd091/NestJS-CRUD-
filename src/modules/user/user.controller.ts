import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
// Service
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() userData: any) {
    return await this.userService.insert(userData);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.userService.delete(params.id);
  }

  @Put(':id')
  async update(@Body() updateData, @Param() params): Promise<any> {
    return await this.userService.update(updateData, params.id);
  }
}
