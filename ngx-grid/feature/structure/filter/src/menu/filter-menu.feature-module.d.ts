import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "./icon/filter-icon.component";
import * as i2 from "./filter-menu.component";
import * as i3 from "./filter-menu-trigger.component";
import * as i4 from "./column-selector/column-selector.component";
import * as i5 from "./filter-selector/filter-type-selector.component";
import * as i6 from "./value/filter-value.component";
import * as i7 from "./field-selector/field-selector.component";
import * as i8 from "./active-filters/filter-menu-active-filters.component";
import * as i9 from "@angular/common";
import * as i10 from "@generic-ui/fabric";
import * as i11 from "@angular/forms";
import * as i12 from "../filter.feature-module";
import * as i13 from "../active-filters/active-filter-list.module";
export declare class FilterMenuFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FilterMenuFeatureModule, [typeof i1.FilterIconComponent, typeof i2.FilterMenuComponent, typeof i3.FilterMenuTriggerComponent, typeof i4.ColumnSelectorComponent, typeof i5.FilterTypeSelectorComponent, typeof i6.FilterValueComponent, typeof i7.FieldSelectorComponent, typeof i8.FilterMenuActiveFiltersComponent], [typeof i9.CommonModule, typeof i10.FabricModule, typeof i11.ReactiveFormsModule, typeof i12.FilterFeatureModule, typeof i13.ActiveFilterListModule], [typeof i3.FilterMenuTriggerComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FilterMenuFeatureModule>;
}
