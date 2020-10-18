import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { CompositionId } from './composition.id';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
import { CompositionReadModelRootId } from '../domain-read/composition.read-model-root-id';
export declare class CompositionEventRepository extends EventRepository<CompositionReadModelRootId, CompositionId> {
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionReadModelRootId): Observable<CompositionColumnsSetEvent>;
    onContainerWidthChanged(compositionId: CompositionReadModelRootId): Observable<number>;
}
