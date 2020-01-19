import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AggregateId, DomainEventBus } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../../domain/composition/read/composition.repository';
import { Composition } from '../../../../domain/composition/read/composition';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
export declare class InMemoryCompositionRepository extends CompositionRepository implements OnDestroy {
    private domainEventBus;
    private inMemoryCompositionQueryStore;
    private readonly composition$;
    private readonly unsubscribe$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionQueryStore: InMemoryCompositionReadStore);
    ngOnDestroy(): void;
    on(aggregateId: AggregateId): Observable<Composition>;
}
