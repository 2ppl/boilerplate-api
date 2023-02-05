import Fastify, { FastifyInstance } from 'fastify';
import qs from 'qs';
import Knex from 'knex';
import { Model } from 'objection';
import { App } from '@2ppl/server/app';
import { Session as SessionSchema } from '@2ppl/boilerplate-schema';
import { config } from '~/config';
import { registerDependencies } from '~/dependencies';
import * as Api from '~/api';
import * as Page from '~/page';
import * as Session from '~/session';
import fastifyBearerAuth from '@fastify/bearer-auth';

declare module 'fastify' {
  export interface FastifyRequest {
    bearerToken?: string;
    currentSession?: SessionSchema.EntityCrudType['singleEntity'];
  }
}

registerDependencies();

const fastify: FastifyInstance = Fastify({
  querystringParser: (str) => qs.parse(str),
});

const keys = new Set(['a-super-secret-key', 'another-super-secret-key']);

fastify.register(fastifyBearerAuth, {
  keys,
  auth: (a) => {
    console.log('a', a);
    return true;
  },
});

fastify.get('/foo', (req, reply) => {
  reply.send({ authenticated: true });
});

const knex = Knex({
  client: 'pg',
  useNullAsDefault: false,
  connection: config.PG_CONNECTION,
});

Model.knex(knex);

async function start(): Promise<void> {
  // fastify.addHook('preParsing', async (request: FastifyRequest) => {
  //   request.bearerToken = getRequestBearer(request);
  //   if (request.bearerToken) {
  //     request.currentSession = await sessionService.findActiveSession(request.bearerToken);
  //   }
  // });

  const app = new App({
    fastify,
    knex,
    modules: [
      Api.module.with([
        Page.module,
        Session.module,
      ]),
    ],
  });

  await app.init();

  await app.start({
    port: Number(config.PORT),
  });
}

start()
  .then(() => console.log('Server started successfully'))
  .catch((error) => {
    console.log('Server start failed', error);
    fastify.log.error(error);
    process.exit(1);
  });
