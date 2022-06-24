import { Provider } from '@angular/core';
import { AggregateFactory } from '../../../api/tactical/aggregate/aggregate-factory';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { Optional } from '../../../../common/optional';
import { AggregateRepository } from '../../../api/tactical/aggregate/aggregate-repository';
import { CreateAggregateCommandHandler } from '../create-aggregate/create-aggregate.command-handler';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { Command } from '../../../api/command/command';
export declare class AggregateFactoryArchive<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly map;
    constructor();
    add(key: string, factory: AggregateFactory<I, A>): void;
    get(key: string): Optional<AggregateFactory<I, A>>;
    has(key: string): boolean;
}
export declare class AggregateRepositoryArchive<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly map;
    constructor();
    add(key: string, repository: AggregateRepository<I, A>): void;
    get(key: string): Optional<AggregateRepository<I, A>>;
    has(key: string): boolean;
}
export interface AggregateConfig<I extends AggregateId, A extends AggregateRoot<I>, C extends Command<I>> {
    repository: AggregateRepository<I, A>;
    factory: AggregateFactory<I, A>;
    key: string;
    createHandler: CreateAggregateCommandHandler<C>;
    commandHandlers: Array<Provider>;
}
