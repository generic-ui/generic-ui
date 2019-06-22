import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { StructureRepository } from 'structure/domain/structure/query/structure.repository';
import { Structure } from 'structure/domain/structure/query/structure';
import { InMemoryStructureQueryStore } from 'structure/infrastructure/in-memory/structure/query/in-memory.structure.query-store';
import { EventBus } from 'generic-ui-cqrs';
import { AggregateId } from 'generic-ui-cqrs';
export declare class InMemoryStructureRepository extends StructureRepository implements OnDestroy {
    private eventBus;
    private inMemoryStructureQueryStore;
    private readonly structure$;
    private readonly unsubscribe$;
    constructor(eventBus: EventBus, inMemoryStructureQueryStore: InMemoryStructureQueryStore);
    select(aggregateId: AggregateId): Observable<Structure>;
    ngOnDestroy(): void;
}
