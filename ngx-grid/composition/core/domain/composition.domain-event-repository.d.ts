import { DomainEventBus } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from '../api/composition.read-model-root-id';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
import { Observable } from 'rxjs';
export declare class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor(domainEventBus: DomainEventBus);
    onColumnsChanged(compositionId: CompositionReadModelRootId): Observable<CompositionColumnsSetEvent>;
    onContainerWidthChanged(compositionId: CompositionReadModelRootId): Observable<number>;
}
