import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { Tag } from "./Tag";
import { User } from "./User";
import {v4 as uuid} from "uuid";

@Entity("compliments")
class Compliment {
 
    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;
    @JoinColumn({name: "user_sender"})
    @ManyToOne(()=> User)
    userSender: User;

    @Column()
    user_receiver: string;
    @JoinColumn({name: "user_receiver"})
    @ManyToOne(()=> User)
    userReciever: User;

    @Column()
    tag_id: string;
    @JoinColumn({name: "tag_id"})
    @ManyToOne(()=> Tag)
    tag: Tag;


    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
           this.id = uuid();
        }
    }
}

export {Compliment}