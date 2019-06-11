import { PagingAggregate } from 'structure/domain/paging/command/paging-aggregate';
import { PagingConfigWithId } from 'structure/domain/paging/paging-config-with-id';
import { Logger } from 'util/cdk/logger/logger';
export declare class PagingAggregateFactory {
    private logger;
    constructor(logger: Logger);
    createDefault(): PagingAggregate;
    createFromConfig(config: PagingConfigWithId): PagingAggregate;
}
