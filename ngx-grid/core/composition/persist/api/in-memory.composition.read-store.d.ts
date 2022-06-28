import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { CompositionReadModeRoot } from '../../core-read/composition.read-mode-root';
import { CompositionAggregate } from '../../domain/composition.aggregate';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../core-read/composition.read-model-root-converter';
import { CompositionId } from '../../api/global/composition.id';
import { CompositionReadModelRootId } from '../../api/global/composition.read-model-root-id';
export declare class InMemoryCompositionReadStore extends InMemoryReadModelStore<CompositionReadModelRootId, CompositionReadModeRoot, CompositionId, CompositionAggregate> {
    private inMemoryCompositionStore;
    private compositionConverter;
    constructor(inMemoryCompositionStore: InMemoryCompositionStore, compositionConverter: CompositionReadModelRootConverter);
    static readonly services: (typeof InMemoryCompositionStore | typeof CompositionReadModelRootConverter)[];
    toReadModel(aggregate: CompositionAggregate): CompositionReadModeRoot;
}
