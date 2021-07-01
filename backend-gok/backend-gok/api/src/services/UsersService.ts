import * as Yup from 'yup';

import { getCustomRepository, Repository } from 'typeorm';
import { CustomError } from 'express-handler-errors';
import dateFormat  from 'dateformat';



import { Users } from './../entities/Users';
import { UsersRepository } from '../repositories/UsersRepository';

import { Starred } from './../entities/Starred';
import { StarredRepository } from '../repositories/StarredRepository';

class UsersService {
  private usersRepository: Repository<Users>;
  private starredRepository: Repository<Starred>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
    this.starredRepository = getCustomRepository(StarredRepository);
  }
  async create(params: Users) {

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      user: Yup.string().required(),
      star: Yup.number().required(),
    });

    if (!(await schema.isValid(params))) {
      throw new CustomError({
        code: 'VALIDATION_FAILS',
        message: 'Validation fails',
        status: 400,
      });
    }

    let _users = new Users();
    const datejoined = dateFormat(new Date(), "yyyy-mm-dd hh:MM:sso");
    _users.idUser = params.idUser;
    _users.avatar = params.avatar;
    _users.name = params.name;
    _users.user = params.user;
    _users.company = params.company;
    _users.location = params.location;
    _users.star = params.star;
    _users.data_cadastro = <any>datejoined;
    _users.data_alteracao = <any>datejoined;
    
      const userAlreadyExists = await this.usersRepository.findOne({idUser: _users.idUser});
  
      if(userAlreadyExists) {
        throw new CustomError({
          code: 'USER_ALREADY_EXIST',
          message: 'User already exist',
          status: 409,
        });
      }

    const users = await this.usersRepository.create(_users);
 
    try {
      await this.usersRepository.save(users);
    } catch (e) {
        console.log(e)
    }
  
    return users;
    
  }

  async delete(id: string) {  
    const user = await this.usersRepository.createQueryBuilder()
    .delete()
    .from(Users)
    .where("idUser = :idUser", { idUser: id })
    .execute();
    const starred = await this.starredRepository.createQueryBuilder()
    .delete()
    .from(Starred)
    .where("user_id = :user_id", { user_id: id })
    .execute();

    if (!user)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return user;
  }

  async findAll() {  
    const user = await this.usersRepository.find();

    if (!user)
    throw new CustomError({
      code: 'USER_NOT_FOUND',
      message: 'User not found',
      status: 404,
    });

    return user;
  }

}

export { UsersService };
