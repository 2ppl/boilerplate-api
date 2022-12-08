import { Auth } from '@2ppl/boilerplate-schema';
import { useSessionService } from '~/session';

export class Service implements Auth.Service {
  private sessionService = useSessionService();

  async login(data: Auth.Login): Promise<Auth.Result> {
    throw new Error('Not Implemented');
  }

  async refresh(data: Auth.Refresh): Promise<Auth.Result> {
    const session = await this.sessionService.findOneByRefreshToken(data.refreshToken);
    const accessToken = String(Math.random());
    const refreshToken = String(Math.random());
    await this.sessionService.update({
      accessToken,
      refreshToken,
    }, { id: session.id });
    return {
      accessToken,
      refreshToken,
    };
  }
}
