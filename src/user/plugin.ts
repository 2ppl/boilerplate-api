import { FastifyInstance } from 'fastify';
import { registerCrudRoutes } from '@2ppl/server/crud';
import { User } from '@2ppl/boilerplate-schema';
import { useUserService } from './di';

export async function plugin(fastifyInstance: FastifyInstance) {
  registerCrudRoutes({
    fastifyInstance,
    crudSchema: User.entityCrudSchema,
    useCrudFastifyService: useUserService,
  });
}
