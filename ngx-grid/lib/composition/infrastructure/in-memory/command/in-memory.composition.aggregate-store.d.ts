import { InMemoryAggregateStore, AggregateStoreRegister } from '@generic-ui/hermes';
import { CompositionAggregate } from '../../../domain/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
export declare class InMemoryCompositionAggregateStore extends InMemoryAggregateStore<CompositionAggregate> {
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, aggregateStoreRegister: AggregateStoreRegister);
}
