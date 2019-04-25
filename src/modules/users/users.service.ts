
import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Cat') private readonly userModel: Model<User>
  ) {}

  async createdUser(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findUser(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    return user;
  }
} 