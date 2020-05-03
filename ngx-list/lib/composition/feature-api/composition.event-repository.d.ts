import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionId } from '../domain/composition.id';
import { CompositionColumnsSetEvent } from '../domain/column/set-columns/composition.columns-set.event';
export declare class CompositionEventRepository {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionId): Observable<CompositionColumnsSetEvent>;
    onContainerWidthChanged(compositionId: CompositionId): Observable<number>;
}
