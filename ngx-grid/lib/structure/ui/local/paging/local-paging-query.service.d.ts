import { Observable } from 'rxjs';
import { PagingQueryService } from '../../../app/paging/paging-query.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/query/paging.repository';
import { Paging } from '../../../domain/paging/query/paging';
export declare class LocalPagingQueryService extends PagingQueryService {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    select(): Observable<Paging>;
    selectOne(): Observable<Paging>;
}
