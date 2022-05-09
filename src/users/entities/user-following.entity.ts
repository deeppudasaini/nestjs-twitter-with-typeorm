import { BaseEntity } from "../../commons/base.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class UserFollowing extends BaseEntity{
    @JoinColumn({ name: 'follower_id' })
  @ManyToOne(() => User)
  follower_id:User;
    @JoinColumn({ name: 'followee_id' })
  @ManyToOne(() => User)
  followee_id:User;
}