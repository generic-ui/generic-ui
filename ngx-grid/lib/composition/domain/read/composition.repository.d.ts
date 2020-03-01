import { Observable } from 'rxjs';
import { CompositionId } from '../composition-id';
import { Composition } from './composition';
import { DomainEventBus, ReadModelRepository } from '@generic-ui/hermes';
export declare abstract class CompositionRepository extends ReadModelRepository {
    protected constructor(domainEventBus: DomainEventBus);
    abstract on(compositionId: CompositionId): Observable<Readonly<Composition>>;
}
