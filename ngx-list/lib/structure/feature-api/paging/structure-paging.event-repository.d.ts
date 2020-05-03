import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructurePagingWarehouse } from './structure-paging.warehouse';
import { StructureId } from '../../domain/structure.id';
export declare class StructurePagingEventRepository {
    private readonly domainEventBus;
    private readonly pagingReadModelService;
    constructor(domainEventBus: DomainEventBus, pagingReadModelService: StructurePagingWarehouse);
    onPageChange(structureId: StructureId): Observable<number>;
    onPageSizeChange(structureId: StructureId): Observable<number>;
}
