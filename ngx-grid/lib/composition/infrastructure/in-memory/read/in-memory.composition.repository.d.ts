import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionRepository } from '../../../domain/read/composition.repository';
import { Composition } from '../../../domain/read/composition';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
export declare class InMemoryCompositionRepository extends CompositionRepository {
    private inMemoryCompositionQueryStore;
    private readonly compositionIdToComposition;
    private readonly composition$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionQueryStore: InMemoryCompositionReadStore);
    on(aggregateId: AggregateId): Observable<Readonly<Composition>>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent): void;
}
