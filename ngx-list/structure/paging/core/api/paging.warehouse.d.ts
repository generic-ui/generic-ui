import { Observable } from 'rxjs';
import { Warehouse } from '@generic-ui/hermes';
import { PagingRepository } from './read/paging.repository';
import { StructureId } from '../../../core/api/structure.id';
import { Paging } from './read/paging';
export declare class PagingWarehouse implements Warehouse {
    private pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId?: StructureId): Observable<Paging>;
    onSinglePaging(structureId?: StructureId): Observable<Paging>;
}
