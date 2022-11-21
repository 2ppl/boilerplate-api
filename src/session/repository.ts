import { CrudRepository } from '@2ppl/server/crud';
import { Session } from '@2ppl/boilerplate-schema';

export interface Repository extends CrudRepository<Session.Entity> {}
