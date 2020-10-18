import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { StructureReadModelRootId } from '../../../grid/core/domain-read/structure.read-model-root-id';
export declare class PagingEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    private readonly eventBus;
    private readonly pagingReadModelService;
    constructor(eventBus: DomainEventBus, pagingReadModelService: PagingWarehouse);
    onPageChange(structureId: StructureReadModelRootId): Observable<number>;
    onPageSizeChange(structureId: StructureReadModelRootId): Observable<number>;
}
