import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingReadModelService } from './paging-read-model.service';
import { StructureId } from '../../domain/structure-id';
export declare class PagingEventService {
    private readonly domainEventBus;
    private readonly pagingQueryService;
    constructor(domainEventBus: DomainEventBus, pagingQueryService: PagingReadModelService);
    onPageChange(structureId: StructureId): Observable<number>;
    onPageSizeChange(structureId: StructureId): Observable<number>;
}
