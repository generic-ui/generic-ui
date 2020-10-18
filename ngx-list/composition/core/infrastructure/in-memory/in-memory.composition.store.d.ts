import { InMemoryStore } from '@generic-ui/hermes';
import { CompositionAggregate } from '../../domain/composition.aggregate';
import { CompositionId } from '../../api/composition.id';
export declare class InMemoryCompositionStore extends InMemoryStore<CompositionId, CompositionAggregate> {
}
