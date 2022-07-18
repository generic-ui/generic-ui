import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "./active-filter-list.component";
import * as i2 from "./search/active-search.component";
import * as i3 from "@angular/common";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "../filter.feature-module";
export declare class ActiveFilterListModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveFilterListModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ActiveFilterListModule, [typeof i1.ActiveFilterListComponent, typeof i2.ActiveSearchComponent], [typeof i3.CommonModule, typeof i4.FabricBadgeModule, typeof i4.FabricButtonModule, typeof i4.FabricButtonGroupModule, typeof i4.FabricCheckboxModule, typeof i4.FabricChipModule, typeof i4.FabricDrawerModule, typeof i4.FabricDropdownModule, typeof i4.FabricRadioButtonModule, typeof i4.FabricRadioGroupModule, typeof i4.FabricProgressBarModule, typeof i4.FabricProgressSpinnerModule, typeof i4.FabricSelectModule, typeof i4.FabricSpinnerModule, typeof i4.FabricTabModule, typeof i4.FabricTooltipModule, typeof i4.FabricToggleButtonModule, typeof i4.FabricInputModule, typeof i4.FabricDialogModule, typeof i4.FabricInlineDialogModule, typeof i4.FabricTabModule, typeof i5.FilterFeatureModule], [typeof i1.ActiveFilterListComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ActiveFilterListModule>;
}
