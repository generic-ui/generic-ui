import { Observable } from 'rxjs';
import { StructurePagingWarehouse } from '../../../feature-api/paging/structure-paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../feature-api/paging/read/paging.repository';
import { Paging } from '../../../feature-api/paging/read/paging';
export declare class LocalPagingWarehouse extends StructurePagingWarehouse {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
