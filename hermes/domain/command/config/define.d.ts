import { Provider } from '@angular/core';
import { AggregateFactory } from '../aggregate/aggregate-factory';
import { AggregateRoot } from '../aggregate/aggregate-root';
import { Optional } from '../../../common/optional';
import { AggregateRepository } from '../aggregate/aggregate-repository';
import { CreateAggregateCommandHandler } from '../aggregate/create/create-aggregate.command-handler';
import { AggregateId } from '../../aggregate-id';
import { Command } from '../command';
export declare class AggregateFactoryArchive<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly map;
    constructor();
    add(key: string, factory: AggregateFactory<I, A>): void;
    get(key: string): Optional<AggregateFactory<I, A>>;
}
export declare class AggregateRepositoryArchive<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly map;
    constructor();
    add(key: string, repository: AggregateRepository<I, A>): void;
    get(key: string): Optional<AggregateRepository<I, A>>;
}
export interface AggregateConfig<I extends AggregateId, A extends AggregateRoot<I>, C extends Command> {
    repository: AggregateRepository<I, A>;
    factory: AggregateFactory<I, A>;
    key: string;
    createHandler: CreateAggregateCommandHandler<A, C>;
    commandHandlers: Array<Provider>;
}
