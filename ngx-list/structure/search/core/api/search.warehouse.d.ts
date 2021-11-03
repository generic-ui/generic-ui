import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare abstract class SearchWarehouse implements Warehouse {
    protected constructor();
    abstract onSearchEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onPhrase(structureId: StructureId): HermesObservable<string>;
    abstract onHighlight(structureId: StructureId): HermesObservable<boolean>;
    abstract onPlaceholder(structureId: StructureId): HermesObservable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SearchWarehouse>;
}
//# sourceMappingURL=search.warehouse.d.ts.map