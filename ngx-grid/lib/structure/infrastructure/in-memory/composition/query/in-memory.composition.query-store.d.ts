import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { Composition } from '../../../../domain/composition/query/composition';
import { CompositionAggregate } from '../../../../domain/composition/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../../domain/composition/composition.converter';
export declare class InMemoryCompositionQueryStore extends InMemoryReadModelStore<Composition, CompositionAggregate> {
    private inMemoryCompositionStore;
    private compositionConverter;
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, compositionConverter: CompositionConverter);
    toReadModel(aggregate: CompositionAggregate): Composition;
}
