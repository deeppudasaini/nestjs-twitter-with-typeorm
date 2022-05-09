import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserFollowing } from './entities/user-following.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,UserFollowing])],
  controllers: [UsersController],
  providers: [UsersService],
  
})
export class UsersModule {}
