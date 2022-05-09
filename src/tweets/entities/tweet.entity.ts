import { BaseEntity } from "../../commons/base.entity";
import { User } from "../../users/entities/user.entity";
import { Entity,Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";


@Entity()
export class Tweet extends BaseEntity{
    @Column({ length: 240, nullable: true })
    @Column({
        length:240,nullable:true
    })
    
    text:string;
    @ManyToOne(()=>User)
    @JoinColumn({name:'author_id'})
    author_id:User;
    @Column()
    images:string
    @Column({ name: 'like_count', default: 0 })
    like_count:number;
    @Column({ name: 'repost_count', default: 0 })
    repost_count:number;
    @OneToOne(() => Tweet)
  @JoinColumn({ name: 'orig_post_id' })
    orig_post_id:Tweet;
    @OneToOne(() => Tweet)
    @JoinColumn({ name: 'reply_to_id' })
    reply_to_id:Tweet;
    @Column()
    hashtags:string;
    @Column()
    mentions:string;
    

    
}
class Mention{
    name:string;
    id:string;
}

