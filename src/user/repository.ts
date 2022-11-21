import { CrudRepository } from '@2ppl/server/crud';
import { User } from '@2ppl/boilerplate-schema';

export interface Repository extends CrudRepository<User.Entity> {}
