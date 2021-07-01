import {
  Column,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  Entity
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Tag } from './Tag'

@Entity("starred")
export class Starred {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column()
  user_id: number;

  @Column()
  star_id: number;

  @Column()
  name: string | null;

  @Column()
  description: string;

  @Column()
  url_repo: string;

  @Column()
  language: string;

  @Column()
  repositories: string;

  @Column()
  qtde_star: number;

  @Column()
  day: number;

  @Column()
  suggestion_tag: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_alteracao: Date;

  @OneToMany(
    () => Tag,
    (tag) => tag.id
  )

  @JoinColumn([{ name: "tag_id", referencedColumnName: "id" }])
  tag_id: Tag;

  constructor() {
    if(!this.id) {
        this.id = uuid();
    }
}
}
