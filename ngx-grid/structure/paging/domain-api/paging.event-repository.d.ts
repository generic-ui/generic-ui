import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { StructureId } from '../../../lib/structure/domain/structure.id';
export declare class PagingEventRepository {
    private readonly domainEventBus;
    private readonly pagingReadModelService;
    constructor(domainEventBus: DomainEventBus, pagingReadModelService: PagingWarehouse);
    onPageChange(structureId: StructureId): Observable<number>;
    onPageSizeChange(structureId: StructureId): Observable<number>;
}
