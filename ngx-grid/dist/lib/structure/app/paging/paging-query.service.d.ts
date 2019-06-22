import { Observable } from 'rxjs';
import { StructureId } from 'structure/domain/structure-id';
import { PagingRepository } from 'structure/domain/paging/query/paging.repository';
import { Paging } from 'structure/domain/paging/query/paging';
export declare class PagingQueryService {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    select(structureId?: StructureId): Observable<Paging>;
    selectOne(structureId?: StructureId): Observable<Paging>;
}
