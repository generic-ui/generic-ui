import { Logger } from '../../../../../feature/common/src/cdk/logger/logger';
import { PagingManager } from './paging.manager';
import { PagingConfigWithId } from './paging-config-with-id';
export declare class PagingManagerFactory {
    private readonly logger;
    constructor(logger: Logger);
    static readonly services: (typeof Logger)[];
    createDefault(): PagingManager;
    createFromConfig(config: PagingConfigWithId): PagingManager;
}
