import { Observable } from 'rxjs';
import { StructurePagingReadModelWarehouse } from '../../../ui-api/paging/structure-paging.read-model-warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../read/paging/paging.repository';
import { Paging } from '../../../read/paging/paging';
export declare class LocalPagingReadModelWarehouse extends StructurePagingReadModelWarehouse {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
