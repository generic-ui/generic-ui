import { AggregateId, Optional } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../../domain/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
export declare class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    private inMemoryCompositionAggregateStore;
    constructor(inMemoryCompositionAggregateStore: InMemoryCompositionAggregateStore);
    getById(aggregateId: AggregateId): Optional<CompositionAggregate>;
    save(aggregate: CompositionAggregate): void;
}
