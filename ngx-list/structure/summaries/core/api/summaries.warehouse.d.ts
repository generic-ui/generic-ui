import { StructureId } from '../../../core/api/structure.id';
import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare abstract class SummariesWarehouse implements Warehouse {
    protected constructor();
    abstract onEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onTopEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onBottomEnabled(structureId: StructureId): HermesObservable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesWarehouse>;
}
//# sourceMappingURL=summaries.warehouse.d.ts.map