import { CrudFastifyService } from '@2ppl/server/crud';
import { Page } from '@2ppl/boilerplate-schema';

export class Service extends CrudFastifyService<Page.EntityCrudType> implements Page.Service {
  async findAll() {
    return {
      total: 5,
      list: [],
    };
  }
}
