
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModelToken') private readonly userModel: Model<User>
  ) {}

  async createdUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find();
  }
} 