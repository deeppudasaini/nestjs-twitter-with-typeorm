import { BaseEntity } from "../../commons/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @Column(
        {
            length:30,nullable:false,unique:true
        }
    )
    username:string;
    @Column({
        nullable:true,length:50
    })
    name:string;
    @Column({
        nullable:true
    })
    avatar:string;
    @Column({
        nullable:true,length:240
    })
    bio:string;
    @Column({default:0})
    follower_count:number;
    @Column({default:0})
    following_count:number;
    @Column({default:false})
    verified:boolean;
}
