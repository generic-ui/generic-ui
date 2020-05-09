import { Observable } from 'rxjs';
import { PagingWarehouse } from '../../../../../structure/paging/domain-api/paging.warehouse';
import { StructureId } from '../../../domain/structure.id';
import { PagingRepository } from '../../../../../structure/paging/domain-api/read/paging.repository';
import { Paging } from '../../../../../structure/paging/domain-api/read/paging';
export declare class LocalPagingWarehouse extends PagingWarehouse {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
