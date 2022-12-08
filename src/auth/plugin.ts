import { FastifyInstance, FastifyRequest } from 'fastify';
import { Auth } from '@2ppl/boilerplate-schema';
import { useAuthService } from './di';

export async function plugin(fastifyInstance: FastifyInstance) {
  const service = useAuthService();

  fastifyInstance.route({
    method: Auth.apiConfig.login.method as any,
    url: Auth.apiConfig.login.url,
    schema: {
      body: Auth.login,
      response: {
        200: Auth.result,
      },
    },
    handler: (request: FastifyRequest) => service.login(
      request.body as Auth.Login,
    ),
  });

  fastifyInstance.route({
    method: Auth.apiConfig.refresh.method as any,
    url: Auth.apiConfig.refresh.url,
    schema: {
      body: Auth.refresh,
      response: {
        200: Auth.result,
      },
    },
    handler: (request: FastifyRequest) => service.refresh(
      request.body as Auth.Refresh,
    ),
  });
}
