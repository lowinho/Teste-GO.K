import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';



import { Tag } from './../entities/Tag';
import { Starred } from './../entities/Starred';
import { TagRepository } from '../repositories/TagRepository';
import { StarredRepository } from '../repositories/StarredRepository';

class TagService {
  private tagRepository: Repository<Tag>;
  private starredRepository: Repository<Starred>;

  constructor() {
    this.tagRepository = getCustomRepository(TagRepository);
  }
  async create(params: Tag) {

    const schema = Yup.object().shape({
      tag: Yup.string().required(),
      id_starred: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _tag = new Tag();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _tag.tag = params.tag;
    _tag.id_starred = params.id_starred;
    _tag.star_id = params.star_id;
    _tag.data_cadastro = <any>datejoined;
    _tag.data_alteracao = <any>datejoined;

    const tag = await this.tagRepository.create(_tag);
 
    try {
      await this.tagRepository.save(tag);
    } catch (e) {
        console.log(e)
    }
  
    return tag;
    
  }

  async update(id: number, params: Tag) {

    const schema = Yup.object().shape({
      tag: Yup.string().required(),
      user_id: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _tag = new Tag();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _tag.tag = params.tag;
    _tag.id_starred = params.id_starred;
    _tag.star_id = params.star_id;
    _tag.data_cadastro = <any>datejoined;
    _tag.data_alteracao = <any>datejoined;

    const tag = await this.tagRepository
    .update({id: id}, _tag);

    return tag;
  }

  async delete(id: string) {  
    const tag = await this.tagRepository.delete(id);

    if (!tag)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return tag;
  }


  async findOne(id: string) {  
    console.log('id',id)
    const tag = await this.tagRepository.find({ where: { star_id: id } });

    if (!tag)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'Tag not found',
      status: 404,
    });

    return tag;
  }

  async findAll() {  
    const tag = await this.tagRepository.find();

    if (!tag)
    throw new CustomError({
      code: 'TAG_NOT_FOUND',
      message: 'Tag not found',
      status: 404,
    });

    return tag;
  }
}

export { TagService };
