import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Starred } from './Starred';

@Entity("tags")
export class Tag {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column()
  tag: string;

  @Column()
  id_starred: number;

  @Column()
  data_cadastro: Date;

  @Column()
  data_alteracao: Date;

  @ManyToOne(
    () => Starred, 
    (stared) => stared.id, { eager: true },
  )

  @JoinColumn([{ name: "star_id", referencedColumnName: "id" }])
  star_id: Starred;

  constructor() {
    if(!this.id) {
        this.id = uuid();
    }
}
  
}
