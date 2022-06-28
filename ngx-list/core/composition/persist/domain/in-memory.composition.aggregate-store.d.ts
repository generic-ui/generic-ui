import { InMemoryAggregateStore } from '@generic-ui/hermes';
import { CompositionAggregate } from '../../domain/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionId } from '../../api/global/composition.id';
export declare class InMemoryCompositionAggregateStore extends InMemoryAggregateStore<CompositionId, CompositionAggregate> {
    constructor(inMemoryCompositionStore: InMemoryCompositionStore);
    static readonly services: (typeof InMemoryCompositionStore)[];
}
