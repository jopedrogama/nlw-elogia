import {Entity, PrimaryColumn, Column, CreateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tags")
export class Tag{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
           this.id = uuid();
        }
    }
}

