import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/api/read/structure.read-model-root-id';
export declare class StructureSummariesEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureReadModelRootId): Observable<DomainEvent<StructureId>>;
}
