import { Logger } from '../../../../common/cdk/logger/logger';
import { PagingManager } from './paging.manager';
import { PagingConfigWithId } from './paging-config-with-id';
export declare class PagingManagerFactory {
    private logger;
    constructor(logger: Logger);
    createDefault(): PagingManager;
    createFromConfig(config: PagingConfigWithId): PagingManager;
}
