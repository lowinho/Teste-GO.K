import { EntityRepository, Repository } from 'typeorm';
import { Starred } from './../entities/Starred';

@EntityRepository(Starred)
class StarredRepository extends Repository<Starred> {}

export { StarredRepository };