import { HermesObservable } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../api/global/composition.read-model-root-id';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
export declare class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor();
    onColumnsChanged(compositionId: CompositionReadModelRootId): HermesObservable<CompositionColumnsSetEvent>;
    onContainerWidthChanged(compositionId: CompositionReadModelRootId): HermesObservable<number>;
}
