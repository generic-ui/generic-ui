import { Observable } from 'rxjs';
import { PagingWarehouse } from '../../../../paging/core/api/paging.warehouse';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingRepository } from '../../../../paging/core/api/read/paging.repository';
import { Paging } from '../../../../paging/core/api/read/paging';
export declare class LocalPagingWarehouse extends PagingWarehouse {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
