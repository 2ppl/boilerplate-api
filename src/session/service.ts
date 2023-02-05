import { FastifyCrudService } from '@2ppl/server/crud';
import { Session } from '@2ppl/boilerplate-schema';
import { FastifyError } from '@2ppl/server/api';
import { useUserService } from '~/user';
import { useSessionRepository } from './di';
import { Static } from '@sinclair/typebox';

export class Service extends FastifyCrudService<Session.EntityCrudType> implements Session.Service {
  protected repository = useSessionRepository();

  private userService = useUserService();

  // async findOne(params: Static<typeof Session['entityKey']>): Promise<Session.SingleEntity> {
  //   const entity = await this.repository.findOne(params);
  //
  //   if (!entity) {
  //     throw new FastifyError('No Entity', 404);
  //   }
  //
  //   const user = await this.userService.findOne({ id: entity.userId });
  //
  //   return {
  //     ...entity,
  //     user,
  //   };
  // }

  async findOneByAccessToken(accessToken: string): Promise<Static<typeof Session['singleEntity']>> {
    const entity = await this.repository.findByAccessToken(accessToken);

    if (!entity) {
      throw new FastifyError('No Entity', 404);
    }

    const user = await this.userService.findOne({ id: entity.userId });
    const { userId, ...a } = entity;

    return {
      ...a,
      user,
    };
  }

  async findOneByRefreshToken(refreshToken: string): Promise<Session.SingleEntity> {
    const entity = await this.repository.findOne({ refreshToken });

    if (!entity) {
      throw new FastifyError('No Entity', 404);
    }

    const user = await this.userService.findOne({ id: entity.userId });

    return {
      ...entity,
      user,
    };
  }

  async findActiveSession(accessToken: string): Promise<Session.SingleEntity> {
    const entity = await this.findOneByAccessToken(accessToken);

    // if (entity.accessTokenExpiredAt < Number(new Date())) {
    //   throw new FastifyError('No Active Session', 404);
    // }

    return entity;
  }
}
