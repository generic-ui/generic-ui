import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../read/composition.read-model-root-repository';
import { CompositionReadModeRoot } from '../../../read/composition.read-mode-root';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionId } from '../../../domain/composition.id';
export declare class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    private inMemoryCompositionReadStore;
    private readonly compositionIdToComposition;
    private readonly composition$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionReadStore: InMemoryCompositionReadStore);
    on(aggregateId: AggregateId): Observable<Readonly<CompositionReadModeRoot>>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent<CompositionId>): void;
}
