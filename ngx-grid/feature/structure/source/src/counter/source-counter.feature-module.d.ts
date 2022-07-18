import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "./filter/active-filter-menu-trigger.directive";
import * as i2 from "./filter/active-filter-menu.component";
import * as i3 from "@angular/common";
import * as i4 from "../../../filter/src/menu/filter-menu.feature-module";
import * as i5 from "../../../filter/src/active-filters/active-filter-list.module";
import * as i6 from "@generic-ui/fabric";
export declare class SourceCounterFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceCounterFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SourceCounterFeatureModule, [typeof i1.ActiveFilterMenuTriggerDirective, typeof i2.ActiveFilterMenuComponent], [typeof i3.CommonModule, typeof i4.FilterMenuFeatureModule, typeof i5.ActiveFilterListModule, typeof i6.FabricButtonModule], [typeof i1.ActiveFilterMenuTriggerDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SourceCounterFeatureModule>;
}
