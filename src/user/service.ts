import { CrudFastifyService } from '@2ppl/server/crud';
import { User } from '@2ppl/boilerplate-schema';
import { useUserRepository } from './di';

export class Service extends CrudFastifyService<User.EntityCrudType> implements User.Service {
  protected repository = useUserRepository();
}
