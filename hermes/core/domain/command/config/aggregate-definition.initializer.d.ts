import { AggregateDefinition } from './aggregate-definition';
import { AggregateFactoryArchive, AggregateRepositoryArchive } from './define';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { Injector } from '@angular/core';
export declare class AggregateDefinitionInitializer<I extends AggregateId, A extends AggregateRoot<I>> {
    register(definedAggregate: Array<AggregateDefinition<I, A>>, injector: Injector, aggregateFactoryArchive: AggregateFactoryArchive<I, A>, aggregateRepositoryArchive: AggregateRepositoryArchive<I, A>): void;
}
