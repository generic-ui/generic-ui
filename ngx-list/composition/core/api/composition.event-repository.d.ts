import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { CompositionId } from '../domain/composition.id';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionReadModelRootId } from './composition.read-model-root-id';
export declare abstract class CompositionEventRepository extends EventRepository<CompositionReadModelRootId, CompositionId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onColumnsChanged(compositionId?: CompositionReadModelRootId): Observable<CompositionColumnsSetEvent>;
    abstract onContainerWidthChanged(compositionId?: CompositionReadModelRootId): Observable<number>;
}
