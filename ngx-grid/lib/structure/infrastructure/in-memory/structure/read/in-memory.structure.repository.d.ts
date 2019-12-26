import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainEventBus, AggregateId } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/read/structure.repository';
import { Structure } from '../../../../domain/structure/read/structure';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
export declare class InMemoryStructureRepository extends StructureRepository implements OnDestroy {
    private domainEventBus;
    private inMemoryStructureQueryStore;
    private readonly structureIdToStructure;
    private readonly structure$;
    private readonly unsubscribe$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureQueryStore: InMemoryStructureReadStore);
    onStructure(aggregateId: AggregateId): Observable<Structure>;
    ngOnDestroy(): void;
}
