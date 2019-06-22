import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
import { EventBus } from 'generic-ui-cqrs';
export declare class PagingEventService {
    private readonly eventBus;
    private readonly pagingQueryService;
    constructor(eventBus: EventBus, pagingQueryService: PagingQueryService);
    selectPageChange(structureId: StructureId): Observable<number>;
}
