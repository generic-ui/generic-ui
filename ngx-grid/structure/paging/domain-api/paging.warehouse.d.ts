import { Observable } from 'rxjs';
import { PagingRepository } from './read/paging.repository';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { Paging } from './read/paging';
export declare class PagingWarehouse {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId?: StructureId): Observable<Paging>;
    onSinglePaging(structureId?: StructureId): Observable<Paging>;
}
