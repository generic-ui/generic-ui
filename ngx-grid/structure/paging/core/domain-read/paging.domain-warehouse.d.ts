import { HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingRepository } from '../api/read/paging.repository';
import { Paging } from '../api/read/paging';
import { PagingWarehouse } from '../api/paging.warehouse';
export declare class PagingDomainWarehouse extends PagingWarehouse {
    private readonly pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId: StructureId): HermesObservable<Paging>;
    oncePaging(structureId: StructureId): HermesObservable<Paging>;
}
