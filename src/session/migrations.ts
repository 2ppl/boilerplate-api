import { Knex } from 'knex';

export const migrations: Record<string, Knex.Migration> = {
  ['1670588539609']: {
    up: (knex: Knex) => knex.schema
      .createTable('sessions', (table) => {
        table.increments('id');
        table.string('accessToken', 255).notNullable();
        table.timestamp('accessTokenExpiredAt').notNullable();
        table.string('refreshToken', 255).notNullable();
        table.timestamp('refreshTokenExpiredAt').notNullable();
        table.integer('userId').notNullable();
        table.timestamps({ useCamelCase: true, defaultToNow: true });
      }),
    down: (knex: Knex) => knex.schema
      .dropTable('sessions'),
  },
};
