import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users") //Nome da tabela
class User {

    @PrimaryColumn()
    readonly id: string; //Read-only bloqueia a modificação por outra classe

    @Column()
    name: string;

    @Column()
    email: string;

    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){ //Toda vez que o id vier nulo, vazio ou undefined ele é criado como uuid
            this.id = uuid();
        }
    }

}

export { User };