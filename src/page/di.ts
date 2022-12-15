import { getDependency } from '@2ppl/core/di';
import { Service } from './service';

export const usePageService = () => getDependency<Service>('PAGE_SERVICE');
