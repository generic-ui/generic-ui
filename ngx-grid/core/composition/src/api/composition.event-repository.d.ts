import { EventRepository, HermesObservable } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from '../core/column/set-columns/composition.columns-set.event';
import { CompositionReadModelRootId } from './global/composition.read-model-root-id';
export declare abstract class CompositionEventRepository extends EventRepository<CompositionReadModelRootId> {
    abstract onColumnsChanged(compositionId?: CompositionReadModelRootId): HermesObservable<CompositionColumnsSetEvent>;
    abstract onContainerWidthChanged(compositionId?: CompositionReadModelRootId): HermesObservable<number>;
}
