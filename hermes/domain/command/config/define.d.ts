import { AggregateFactory } from '../create-handler/aggregate.factory';
import { Aggregate } from '../aggregate/aggregate';
import { Optional } from '../../../common/optional';
import { AggregateRepository } from '../aggregate/aggregate-repository';
import { AggregateCommandHandler } from '../create-handler/aggregate-command.handler';
export declare class AggregateFactoryArchive {
    private readonly map;
    constructor();
    add(key: string, factory: AggregateFactory<Aggregate>): void;
    get(key: string): Optional<AggregateFactory<Aggregate>>;
}
export declare class AggregateRepositoryArchive {
    private readonly map;
    constructor();
    add(key: string, repository: AggregateRepository<Aggregate>): void;
    get(key: string): Optional<AggregateRepository<Aggregate>>;
}
export interface AggregateConfig {
    repository: AggregateRepository<Aggregate>;
    factory: AggregateFactory<Aggregate>;
    key: string;
    createHandler: AggregateCommandHandler<any, any>;
    handlers?: Array<any>;
}
