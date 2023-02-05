import { Entity, ListedQuery, ListedResult, OrmCrudRepository } from '@2ppl/server/crud';

export class Repository<T extends Entity> extends OrmCrudRepository<T> {
  async findAll(query: ListedQuery<T>): Promise<ListedResult<T>> {
    console.log('OrmCrudRepository FIND ALL JKE');
    console.log('query', query);

    const request = this.mc.query();
    const count = this.mc.query().count();

    const offset = Number(query?.offset);

    if (offset) {
      request.offset(offset);
    }

    const limit = Number(query?.limit);

    if (limit) {
      request.limit(limit);
    }

    const list = await request;
    const total = await count;

    console.log('list', list);
    console.log('total', total[0].count);

    return {
      list,
      total: total[0]?.count,
    };
  }
}
