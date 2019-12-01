import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureAggregationUiEventsRepository {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    selectAggregationsChanged(structureId: StructureId): Observable<DomainEvent>;
}
