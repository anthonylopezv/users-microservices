
import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controllers';
import { UsersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersProviders],
})
export class UsersModule {}