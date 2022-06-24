import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { CompositionId } from './global/composition.id';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionReadModelRootId } from './global/composition.read-model-root-id';
export declare abstract class CompositionEventRepository extends EventRepository<CompositionReadModelRootId, CompositionId> {
    abstract onColumnsChanged(compositionId?: CompositionReadModelRootId): HermesObservable<CompositionColumnsSetEvent>;
    abstract onContainerWidthChanged(compositionId?: CompositionReadModelRootId): HermesObservable<number>;
}
