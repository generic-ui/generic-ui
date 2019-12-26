import { Observable } from 'rxjs';
import { DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { CompositionId } from '../../domain/composition/composition-id';
export declare class CompositionEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    selectColumnsChanged(compositionId: CompositionId): Observable<DomainEvent>;
    selectWidthChanged(compositionId: CompositionId): Observable<number>;
    selectContainerWidthChanged(compositionId: CompositionId): Observable<number>;
}
