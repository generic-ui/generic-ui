import { Observable } from 'rxjs';
import { CompositionId } from '../api/composition.id';
import { CompositionReadModeRoot } from './composition.read-mode-root';
import { DomainEventBus, ReadModelRootRepository } from '@generic-ui/hermes';
export declare abstract class CompositionReadModelRootRepository extends ReadModelRootRepository<CompositionId> {
    protected constructor(domainEventBus: DomainEventBus);
    abstract on(compositionId: CompositionId): Observable<Readonly<CompositionReadModeRoot>>;
}
