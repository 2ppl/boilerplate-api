import { FastifyInstance } from 'fastify';
import { registerCrudRoutes } from '@2ppl/server/crud';
import { Session } from '@2ppl/boilerplate-schema';
import { useSessionService } from './di';

export async function plugin(fastifyInstance: FastifyInstance) {
  registerCrudRoutes({
    fastifyInstance,
    crudSchema: Session.entityCrudSchema,
    crudService: useSessionService(),
  });
}
