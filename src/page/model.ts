import { Knex } from 'knex';
import { Model as M } from 'objection';

export class Model extends M {
  static tableName = 'pages';

  // static relationMappings = {
  //   children: {
  //     relation: Model.HasManyRelation,
  //     modelClass: PageModel,
  //     join: {
  //       from: 'persons.id',
  //       to: 'persons.parentId'
  //     }
  //   }
  // };

  // private dbService = useDbService();

  // async createSchema() {
  //   if (await this.dbService.knex.schema.hasTable('pages')) {
  //     return;
  //   }
  //
  //   // Create database schema. You should use knex migration files
  //   // to do this. We create it here for simplicity.
  //   await this.dbService.knex.schema.createTable('pages', (table) => {
  //     table.increments('id').primary();
  //     // table.integer('parentId').references('pages.id');
  //     table.string('title');
  //     table.string('name');
  //     table.text('content');
  //     table.timestamps();
  //   });
  // }
}
