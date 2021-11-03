import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { Paging } from './read/paging';
import * as i0 from "@angular/core";
export declare abstract class PagingWarehouse implements Warehouse {
    protected constructor();
    abstract onPaging(structureId: StructureId): HermesObservable<Paging>;
    abstract oncePaging(structureId: StructureId): HermesObservable<Paging>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingWarehouse>;
}
//# sourceMappingURL=paging.warehouse.d.ts.map