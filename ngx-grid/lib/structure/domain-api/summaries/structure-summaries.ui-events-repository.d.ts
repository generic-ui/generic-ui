import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../domain/structure.id';
export declare class StructureSummariesUiEventsRepository {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onSummariesChanged(structureId: StructureId): Observable<DomainEvent<StructureId>>;
}
