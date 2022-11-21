import { getDependency } from '@2ppl/core/di';
import { Service } from './service';

export const useAuthService = () => getDependency<Service>('AUTH_SERVICE');
