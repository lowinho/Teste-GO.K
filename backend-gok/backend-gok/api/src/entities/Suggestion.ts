import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("suggestion")
export class Suggestion {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column()
  tag : string;
  
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
