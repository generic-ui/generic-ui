import { Observable } from 'rxjs';
import { PagingRepository } from '../../domain/paging/query/paging.repository';
import { StructureId } from '../../domain/structure-id';
import { Paging } from '../../domain/paging/query/paging';
export declare class PagingQueryService {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    select(structureId?: StructureId): Observable<Paging>;
    selectOne(structureId?: StructureId): Observable<Paging>;
}
