import { FilterPublisher } from '../../../../core/structure/filter/src/api/filter.publisher';
import { FilterWarehouse } from '../../../../core/structure/filter/src/api/filter.warehouse';
import { FilterIntegration } from '../../../../core/structure/filter/src/api-integration/filter.integration';
import * as i0 from "@angular/core";
export declare function provideFilterCommandInvoker(): FilterPublisher;
export declare function provideFilterWarehouse(): FilterWarehouse;
export declare function provideFilterIntegration(): FilterIntegration;
export declare class FilterFeatureModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FilterFeatureModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FilterFeatureModule>;
}
