import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingQueryService } from './paging-query.service';
import { StructureId } from '../../domain/structure-id';
export declare class PagingEventService {
    private readonly domainEventBus;
    private readonly pagingQueryService;
    constructor(domainEventBus: DomainEventBus, pagingQueryService: PagingQueryService);
    selectPageChange(structureId: StructureId): Observable<number>;
    selectPageSizeChange(structureId: StructureId): Observable<number>;
}
