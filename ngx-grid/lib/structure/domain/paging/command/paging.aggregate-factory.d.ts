import { Logger } from '../../../../../common/cdk/logger/logger';
import { PagingAggregate } from './paging.aggregate';
import { PagingConfigWithId } from '../paging-config-with-id';
export declare class PagingAggregateFactory {
    private logger;
    constructor(logger: Logger);
    createDefault(): PagingAggregate;
    createFromConfig(config: PagingConfigWithId): PagingAggregate;
}
