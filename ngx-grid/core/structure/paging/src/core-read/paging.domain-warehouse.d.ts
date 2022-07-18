import { HermesObservable, HermesSingle } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagingRepository } from './paging.repository';
import { PagingModel } from '../api/model/paging.model';
import { PagingWarehouse } from '../api/paging.warehouse';
export declare class PagingDomainWarehouse extends PagingWarehouse {
    private readonly pagingRepository;
    constructor(pagingRepository: PagingRepository);
    static readonly services: (typeof PagingRepository)[];
    onPaging(structureId: StructureId): HermesObservable<PagingModel>;
    oncePaging(structureId: StructureId): HermesSingle<PagingModel>;
}
