import { CrudFastifyService } from '@2ppl/server/crud';
import { Page } from '@2ppl/boilerplate-schema';
import { usePageRepository } from './di';

export class Service extends CrudFastifyService<Page.EntityCrudType> implements Page.Service {
  protected repository = usePageRepository();
}
