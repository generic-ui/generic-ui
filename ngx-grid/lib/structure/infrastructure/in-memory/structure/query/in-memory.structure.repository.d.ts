import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainEventBus, AggregateId } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/query/structure.repository';
import { Structure } from '../../../../domain/structure/query/structure';
import { InMemoryStructureQueryStore } from './in-memory.structure.query-store';
export declare class InMemoryStructureRepository extends StructureRepository implements OnDestroy {
    private domainEventBus;
    private inMemoryStructureQueryStore;
    private readonly structureIdToStructure;
    private readonly structure$;
    private readonly unsubscribe$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureQueryStore: InMemoryStructureQueryStore);
    select(aggregateId: AggregateId): Observable<Structure>;
    ngOnDestroy(): void;
}
