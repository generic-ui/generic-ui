import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootRepository } from '../../../feature-api/read/composition.read-model-root-repository';
import { CompositionReadModeRoot } from '../../../feature-api/read/composition.read-mode-root';
import { InMemoryCompositionReadStore } from './in-memory.composition.read-store';
import { CompositionId } from '../../../domain/composition.id';
export declare class InMemoryCompositionRepository extends CompositionReadModelRootRepository {
    private inMemoryCompositionReadStore;
    private readonly compositionIdToComposition;
    private readonly composition$;
    constructor(domainEventBus: DomainEventBus, inMemoryCompositionReadStore: InMemoryCompositionReadStore);
    on(compositionId: CompositionId): Observable<Readonly<CompositionReadModeRoot>>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subscribe(event: DomainEvent<CompositionId>): void;
}
