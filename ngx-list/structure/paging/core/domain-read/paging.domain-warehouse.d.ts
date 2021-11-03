import { HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingRepository } from '../api/read/paging.repository';
import { Paging } from '../api/read/paging';
import { PagingWarehouse } from '../api/paging.warehouse';
import * as i0 from "@angular/core";
export declare class PagingDomainWarehouse extends PagingWarehouse {
    private readonly pagingRepository;
    constructor(pagingRepository: PagingRepository);
    onPaging(structureId: StructureId): HermesObservable<Paging>;
    oncePaging(structureId: StructureId): HermesObservable<Paging>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingDomainWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingDomainWarehouse>;
}
//# sourceMappingURL=paging.domain-warehouse.d.ts.map