import { Module } from '@nestjs/common';
import { HashtagsService } from './hashtags.service';
import { HashtagsController } from './hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hashtag } from './entities/hashtag.entity';

@Module({
  
  controllers: [HashtagsController],
  providers: [HashtagsService]
})
export class HashtagsModule {}
