import { FastifyCrudService, OrmCrudRepository } from '@2ppl/server/crud';
import { Page } from '@2ppl/boilerplate-schema';
import { Model } from './model';

export class Service extends FastifyCrudService<Page.EntityCrudType> implements Page.Service {
  protected repository = new OrmCrudRepository(Model);
}
