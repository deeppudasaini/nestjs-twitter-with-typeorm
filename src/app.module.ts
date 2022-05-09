import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetsModule } from './tweets/tweets.module';
import { HashtagsModule } from './hashtags/hashtags.module';
import { LikesModule } from './likes/likes.module';
import { AuthModule } from './auth/auth.module';
import { CommonsModule } from './commons/commons.module';


@Module({
  imports: [CommonsModule,UsersModule, TweetsModule, HashtagsModule, LikesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
