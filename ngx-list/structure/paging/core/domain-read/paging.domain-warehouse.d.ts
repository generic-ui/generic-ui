import { HermesObservable, HermesSingle } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingRepository } from './paging.repository';
import { PagingModel } from '../api/paging.model';
import { PagingWarehouse } from '../api/paging.warehouse';
export declare class PagingDomainWarehouse extends PagingWarehouse {
    private readonly pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId: StructureId): HermesObservable<PagingModel>;
    oncePaging(structureId: StructureId): HermesSingle<PagingModel>;
}
