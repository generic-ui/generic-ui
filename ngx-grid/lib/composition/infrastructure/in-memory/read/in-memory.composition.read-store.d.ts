import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { CompositionReadModeRoot } from '../../../read/composition.read-mode-root';
import { CompositionAggregate } from '../../../domain/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../read/composition.read-model-root-converter';
import { CompositionId } from '../../../domain/composition.id';
import { CompositionReadModelRootId } from '../../../read/composition.read-model-root-id';
export declare class InMemoryCompositionReadStore extends InMemoryReadModelStore<CompositionReadModelRootId, CompositionReadModeRoot, CompositionId, CompositionAggregate> {
    private inMemoryCompositionStore;
    private compositionConverter;
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, compositionConverter: CompositionReadModelRootConverter);
    toReadModel(aggregate: CompositionAggregate): CompositionReadModeRoot;
}
