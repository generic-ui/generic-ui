import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionId } from '../domain/composition.id';
export declare class CompositionEventRepository {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionId): Observable<DomainEvent<CompositionId>>;
    onContainerWidthChanged(compositionId: CompositionId): Observable<number>;
}
