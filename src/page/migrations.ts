import { Knex } from 'knex';

export const migrations: Record<string, Knex.Migration> = {
  ['1670588539608']: {
    up: (knex: Knex) => knex.schema
      .createTable('pages', (table) => {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('title', 255).nullable();
        table.text('content').nullable();
        table.timestamps({ useCamelCase: true, defaultToNow: true });
      }),
    down: (knex: Knex) => knex.schema
      .dropTable('pages'),
  },
};
