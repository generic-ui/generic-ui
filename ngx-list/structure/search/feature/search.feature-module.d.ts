import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchApiModule } from '../core/api/search.api-module';
import * as i0 from "@angular/core";
import * as i1 from "./icon/search-icon.component";
import * as i2 from "./search.component";
import * as i3 from "@angular/common";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "../core/api/search.api-module";
import * as i6 from "@angular/forms";
export declare class SearchFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    constructor(searchApiModule: SearchApiModule);
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SearchFeatureModule, [typeof i1.SearchIconComponent, typeof i2.SearchComponent], [typeof i3.CommonModule, typeof i4.FabricModule, typeof i5.SearchApiModule, typeof i6.ReactiveFormsModule], [typeof i1.SearchIconComponent, typeof i2.SearchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SearchFeatureModule>;
}
//# sourceMappingURL=search.feature-module.d.ts.map