
import { Body, Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Controller()
export class UsersController{
  constructor(private readonly usersService: UsersService) {}
  
  @MessagePattern({ cmd: 'FIND_USERS' })
  async findUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }
}