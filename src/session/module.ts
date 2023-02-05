import { AppModule } from '@2ppl/server/app';
import { plugin } from './plugin';
import { migrations } from './migrations';

export const module = new AppModule('session', {
  plugin,
  migrations,
});
