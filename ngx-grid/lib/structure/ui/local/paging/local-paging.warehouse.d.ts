import { Observable } from 'rxjs';
import { StructurePagingWarehouse } from '../../../ui-api/paging/structure-paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../read/paging/paging.repository';
import { Paging } from '../../../read/paging/paging';
export declare class LocalPagingWarehouse extends StructurePagingWarehouse {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
