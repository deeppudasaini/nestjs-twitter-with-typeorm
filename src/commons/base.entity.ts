import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    status:boolean;
    @Column()
    createdAt:Date;
    @Column()
    updatedAt:Date;
}
