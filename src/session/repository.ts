import { CrudRepository, Entity, OrmCrudRepository } from '@2ppl/server/crud';
import { Session } from '@2ppl/boilerplate-schema';
import { Static, Type } from '@sinclair/typebox';

const e = Session.entity;

const a = Type.Object({});

type Entity = Static<typeof a>;

export class Repository extends OrmCrudRepository<Static<typeof Session['entity']>> {
  async findByAccessToken(accessToken: string): Promise<Static<typeof Session['entity']>> {
    return this.mc.query().findOne({ accessToken });
  }
}
