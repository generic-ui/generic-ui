import { AggregateId, Optional } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../../core/composition.aggregate-repository';
import { InMemoryCompositionAggregateStore } from './in-memory.composition.aggregate-store';
import { CompositionAggregate } from '../../domain/composition.aggregate';
export declare class InMemoryCompositionAggregateRepository extends CompositionAggregateRepository {
    private readonly inMemoryCompositionAggregateStore;
    constructor(inMemoryCompositionAggregateStore: InMemoryCompositionAggregateStore);
    static readonly services: (typeof InMemoryCompositionAggregateStore)[];
    findById(aggregateId: AggregateId): Optional<CompositionAggregate>;
    save(aggregate: CompositionAggregate): void;
}
