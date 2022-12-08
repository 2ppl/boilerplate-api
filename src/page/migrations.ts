import { Knex } from 'knex';

export const migrations: Record<string, Knex.Migration> = {
  ['1670351032']: {
    up: (knex: Knex) => knex.schema
      .createTable('pages', (table) => {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.string('title', 255);
        table.text('content');
        table.integer('createdAt').notNullable();
        table.integer('updatedAt').notNullable();
      }),
    down: (knex: Knex) => knex.schema
      .dropTable('pages'),
  },
};
