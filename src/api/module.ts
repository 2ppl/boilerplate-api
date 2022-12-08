import { AppModule } from '@2ppl/server/app';
import * as Page from '~/page';
import { plugin } from './plugin';

export const module = new AppModule('api', {
  plugin,
  modules: [
    Page.module,
  ],
});
