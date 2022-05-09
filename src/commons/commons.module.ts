import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from '../likes/entities/like.entity';
import { Tweet } from '../tweets/entities/tweet.entity';
import { UserFollowing } from '../users/entities/user-following.entity';
import { User } from '../users/entities/user.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type :"sqlite",
            database: "twitter",
            entities: [
                User,Like,Tweet,UserFollowing
            ],
            synchronize: true
        }),
      ],
})
export class CommonsModule{}

