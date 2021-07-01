import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';

import { Suggestion } from './../entities/Suggestion';
import { SuggestionRepository } from '../repositories/SuggestionRepository';

class SuggestionService {
  private suggestionRepository: Repository<Suggestion>;

  constructor() {
    this.suggestionRepository = getCustomRepository(SuggestionRepository);
  }
  async create(params: Suggestion) {

    console.log(params)

    const schema = Yup.object().shape({
      tag: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _suggestion = new Suggestion();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _suggestion.tag = params.tag;
    _suggestion.data_cadastro = <any>datejoined;
    _suggestion.data_alteracao = <any>datejoined;
    
    
      // console.log('userAlreadyExists', userAlreadyExists)

    const suggestion = await this.suggestionRepository.create(_suggestion);
 
    try {
      await this.suggestionRepository.save(suggestion);
    } catch (e) {
        console.log(e)
    }
  
    return suggestion;
    
  }

  async update(id: number, params: Suggestion) {

    const schema = Yup.object().shape({
      tag: Yup.string().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _suggestion = new Suggestion();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _suggestion.tag = params.tag;
    _suggestion.data_cadastro = <any>datejoined;
    _suggestion.data_alteracao = <any>datejoined;

    const suggestion = await this.suggestionRepository
    .update({id: id}, _suggestion);

    return suggestion;
  }


  async findAll() {  
    const suggestion = await this.suggestionRepository.find();

    if (!suggestion)
    throw new CustomError({
      code: 'SUGGESTION_NOT_FOUND',
      message: 'Tag not found',
      status: 404,
    });

    return suggestion;
  }
}

export { SuggestionService };
