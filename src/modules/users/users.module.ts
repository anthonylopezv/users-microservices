
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controllers';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "./schemas/user.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}