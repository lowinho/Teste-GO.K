import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column()
  idUser: number;

  @Column()
  avatar: string ;

  @Column()
  name: string;

  @Column()
  user: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column()
  star: number;

  @Column()
  data_cadastro: Date;

  @Column()
  data_alteracao: Date;

  constructor() {
    if(!this.id) {
        this.id = uuid();
    }
}
  
}
