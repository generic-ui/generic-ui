import { AggregateId } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../domain/command/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
import { CompositionAggregate } from '../../../domain/command/composition.aggregate';
export declare class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    private inMemoryCompositionAggregateStore;
    constructor(inMemoryCompositionAggregateStore: InMemoryCompositionAggregateStore);
    getById(aggregateId: AggregateId): CompositionAggregate;
    save(aggregate: CompositionAggregate): void;
}
