import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SearchPublisher } from '../../../../core/structure/search/src/api/search.publisher';
import { SearchWarehouse } from '../../../../core/structure/search/src/api/search.warehouse';
import { SearchEventRepository } from '../../../../core/structure/search/src/api/search.event-repository';
import * as i0 from "@angular/core";
import * as i1 from "./icon/search-icon.component";
import * as i2 from "./search.component";
import * as i3 from "@angular/common";
import * as i4 from "@generic-ui/fabric";
import * as i5 from "@angular/forms";
export declare function provideSearchCommandInvoker(): SearchPublisher;
export declare function provideSearchWarehouse(): SearchWarehouse;
export declare function provideSearchEventRepository(): SearchEventRepository;
export declare class SearchFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SearchFeatureModule, [typeof i1.SearchIconComponent, typeof i2.SearchComponent], [typeof i3.CommonModule, typeof i4.FabricModule, typeof i5.ReactiveFormsModule], [typeof i1.SearchIconComponent, typeof i2.SearchComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SearchFeatureModule>;
}
