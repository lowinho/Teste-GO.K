import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';



import { Starred } from './../entities/Starred';
import { StarredRepository } from '../repositories/StarredRepository';

class StarredService {
  private starredRepository: Repository<Starred>;

  constructor() {
    this.starredRepository = getCustomRepository(StarredRepository);
  }
  async create(params: Starred) {

    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      star_id: Yup.string().required(),
      name: Yup.string().required(),
    });


    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }
    
    let _starred = new Starred();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _starred.user_id = params.user_id;
    _starred.star_id = params.star_id;
    _starred.tag_id = params.tag_id;
    _starred.name = params.name;
    _starred.description = params.description;
    _starred.qtde_star = params.qtde_star;
    _starred.url_repo = params.url_repo;
    _starred.language = params.language;
    _starred.repositories = params.repositories;
    _starred.day = params.day ?? null;
    _starred.suggestion_tag = params.suggestion_tag;
    _starred.data_cadastro = <any>datejoined;
    _starred.data_alteracao = <any>datejoined;
    

    const starred = await this.starredRepository.create(_starred);
 
    try {
      await this.starredRepository.save(starred);
    } catch (e) {
        console.log(e)
    }
  
    return starred;
    
  }

  async update(id: number, params: Starred) {

    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      star_id: Yup.string().required(),
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _starred = new Starred();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _starred.user_id = params.user_id;
    _starred.star_id = params.star_id;
    _starred.tag_id = params.tag_id;
    _starred.name = params.name;
    _starred.description = params.description;
    _starred.qtde_star = params.qtde_star;
    _starred.url_repo = params.url_repo;
    _starred.language = params.language;
    _starred.repositories = params.repositories;
    _starred.day = params.day ?? null;
    _starred.suggestion_tag = params.suggestion_tag;
    _starred.data_cadastro = <any>datejoined;
    _starred.data_alteracao = <any>datejoined;

    const starred = await this.starredRepository
    .update({id: id}, _starred);

    return starred;
  }


  async findOne(id: string) {  
    const user = await this.starredRepository.find({ where: { user_id: id } });

    if (!user)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'Repository not found',
      status: 404,
    });
    return user;
  }

  async findAll() {  
    const user = await this.starredRepository.find();

    if (!user)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'Repository not found',
      status: 404,
    });

    return user;
  }
}

export { StarredService };
