import { Observable } from 'rxjs';
import { PagingReadModelService } from '../../../ui-api/paging/paging-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { PagingRepository } from '../../../domain/paging/read/paging.repository';
import { Paging } from '../../../domain/paging/read/paging';
export declare class LocalPagingReadModelService extends PagingReadModelService {
    private structureId;
    constructor(structureId: StructureId, pagingRepository: PagingRepository);
    onPaging(): Observable<Paging>;
    onSinglePaging(): Observable<Paging>;
}
