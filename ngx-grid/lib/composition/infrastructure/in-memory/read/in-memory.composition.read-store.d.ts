import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { Composition } from '../../../domain/read/composition';
import { CompositionAggregate } from '../../../domain/command/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../domain/composition.converter';
export declare class InMemoryCompositionReadStore extends InMemoryReadModelStore<Composition, CompositionAggregate> {
    private inMemoryCompositionStore;
    private compositionConverter;
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, compositionConverter: CompositionConverter);
    toReadModel(aggregate: CompositionAggregate): Composition;
}
