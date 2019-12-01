import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { DomainEventBus, AggregateId } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../../domain/composition/query/composition.repository';
import { Composition } from '../../../../domain/composition/query/composition';
import { InMemoryCompositionQueryStore } from './in-memory.composition.query-store';
export declare class InMemoryCompositionRepository extends CompositionRepository implements OnDestroy {
    private domainEventBus;
    private inMemoryCompositionQueryStore;
    private readonly composition$;
    private readonly unsubscribe$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionQueryStore: InMemoryCompositionQueryStore);
    ngOnDestroy(): void;
    select(aggregateId: AggregateId): Observable<Composition>;
}
