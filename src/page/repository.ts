import { CrudRepository } from '@2ppl/server/crud';
import { Page } from '@2ppl/boilerplate-schema';

export interface Repository extends CrudRepository<Page.Entity> {}
