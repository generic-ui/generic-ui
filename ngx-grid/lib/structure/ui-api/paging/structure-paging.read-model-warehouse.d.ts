import { Observable } from 'rxjs';
import { PagingRepository } from '../../read/paging/paging.repository';
import { StructureId } from '../../domain/structure.id';
import { Paging } from '../../read/paging/paging';
export declare class StructurePagingReadModelWarehouse {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId?: StructureId): Observable<Paging>;
    onSinglePaging(structureId?: StructureId): Observable<Paging>;
}
