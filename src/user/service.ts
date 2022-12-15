import { FastifyCrudService } from '@2ppl/server/crud';
import { User } from '@2ppl/boilerplate-schema';
import { useUserRepository } from './di';

export class Service extends FastifyCrudService<User.EntityCrudType> implements User.Service {
  protected repository = useUserRepository();
}
