
import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createdUserDto: CreateUserDto) {
    return this.usersService.create(createdUserDto);
  }

  @Get()
  async findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }
}