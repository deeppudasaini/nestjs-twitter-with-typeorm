
import { BaseEntity } from '../../commons/base.entity';
import { Tweet } from '../../tweets/entities/tweet.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Like extends BaseEntity {
  @ManyToOne(() => User)
  @JoinColumn({ name: 'tweet_id' })
  tweet_id: Tweet;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user_id: User;
}