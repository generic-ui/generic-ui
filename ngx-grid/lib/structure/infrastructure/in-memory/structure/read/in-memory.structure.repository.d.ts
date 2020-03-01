import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { StructureRepository } from '../../../../domain/structure/read/structure.repository';
import { Structure } from '../../../../domain/structure/read/structure';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
export declare class InMemoryStructureRepository extends StructureRepository implements OnDestroy {
    private inMemoryStructureQueryStore;
    private readonly structureIdToStructure;
    private readonly structure$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureQueryStore: InMemoryStructureReadStore);
    onStructure(aggregateId: AggregateId): Observable<Structure>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subs(event: DomainEvent): void;
}
