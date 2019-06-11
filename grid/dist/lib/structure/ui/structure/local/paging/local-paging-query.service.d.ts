import { Observable } from 'rxjs';
import { Paging } from 'structure/domain/paging/query/paging';
import { StructureId } from 'structure/domain/structure-id';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
import { PagingRepository } from 'structure/domain/paging/query/paging.repository';
export declare class LocalPagingQueryService extends PagingQueryService {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    select(): Observable<Paging>;
    selectOne(): Observable<Paging>;
}
