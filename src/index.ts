import Fastify, { FastifyInstance } from 'fastify';
import qs from 'qs';
import Knex from 'knex';
import { Model } from 'objection';
import { App } from '@2ppl/server/app';
import { Session } from '@2ppl/boilerplate-schema';
import { config } from '~/config';
import { registerDependencies } from '~/dependencies';
import * as Api from '~/api';
import * as Page from '~/page';

declare module 'fastify' {
  export interface FastifyRequest {
    bearerToken?: string;
    currentSession?: Session.EntityCrudType['singleEntity'];
  }
}

registerDependencies();

const fastify: FastifyInstance = Fastify({
  querystringParser: (str) => qs.parse(str),
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
