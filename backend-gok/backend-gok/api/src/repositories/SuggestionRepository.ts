import { EntityRepository, Repository } from 'typeorm';
import { Suggestion } from './../entities/Suggestion';

@EntityRepository(Suggestion)
class SuggestionRepository extends Repository<Suggestion> {}

export { SuggestionRepository };