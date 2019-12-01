import { InMemoryAggregateStore, AggregateStoreRegister, AggregateId } from '@generic-ui/hermes';
import { CompositionAggregate } from '../../../../domain/composition/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
export declare class InMemoryCompositionAggregateStore extends InMemoryAggregateStore<CompositionAggregate> {
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, aggregateStoreRegister: AggregateStoreRegister);
    getById(aggregateId: AggregateId): CompositionAggregate;
}
