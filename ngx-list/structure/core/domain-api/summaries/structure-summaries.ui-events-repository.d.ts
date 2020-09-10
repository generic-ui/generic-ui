import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureId } from '../../domain/structure.id';
import { StructureReadModelRootId } from '../read/structure.read-model-root-id';
export declare class StructureSummariesUiEventsRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureReadModelRootId): Observable<DomainEvent<StructureId>>;
}
