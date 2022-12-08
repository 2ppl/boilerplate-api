import { FastifyInstance } from 'fastify';
import { registerCrudRoutes } from '@2ppl/server/crud';
import { Page } from '@2ppl/boilerplate-schema';
import { usePageService } from './di';

export async function plugin(fastifyInstance: FastifyInstance) {
  const crudService = usePageService();

  registerCrudRoutes({
    fastifyInstance,
    crudSchema: Page.entityCrudSchema,
    crudService,
  });
}
