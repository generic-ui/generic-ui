import { Observable } from 'rxjs';
import { PagingRepository } from '../../domain/paging/read/paging.repository';
import { StructureId } from '../../domain/structure-id';
import { Paging } from '../../domain/paging/read/paging';
export declare class PagingReadModelService {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId?: StructureId): Observable<Paging>;
    onSinglePaging(structureId?: StructureId): Observable<Paging>;
}
