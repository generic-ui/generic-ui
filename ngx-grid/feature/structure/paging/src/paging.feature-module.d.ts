import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { PagingPublisher } from '../../../../core/structure/paging/src/api/paging.publisher';
import { PagingWarehouse } from '../../../../core/structure/paging/src/api/paging.warehouse';
import { PagingEventRepository } from '../../../../core/structure/paging/src/api/paging.event-repository';
import * as i0 from "@angular/core";
import * as i1 from "./paging.component";
import * as i2 from "./basic/navigator/paging-navigator.component";
import * as i3 from "./select/paging-select.component";
import * as i4 from "./basic/stats/paging-stats.component";
import * as i5 from "./advanced/navigator/alternative-paging-navigator.component";
import * as i6 from "./advanced/pages/alternative-paging-pages.component";
import * as i7 from "@angular/common";
import * as i8 from "@generic-ui/fabric";
import * as i9 from "../../../l10n/translation.feature-module";
export declare function providePagingCommandInvoker(): PagingPublisher;
export declare function providePagingWarehouse(): PagingWarehouse;
export declare function providePagingEventRepository(): PagingEventRepository;
export declare class PagingFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PagingFeatureModule, [typeof i1.PagingComponent, typeof i2.PagingNavigatorComponent, typeof i3.PagingSelectComponent, typeof i4.PagingStatsComponent, typeof i5.AlternativePagingNavigatorComponent, typeof i6.AlternativePagingPagesComponent], [typeof i7.CommonModule, typeof i8.FabricModule, typeof i9.TranslationFeatureModule], [typeof i1.PagingComponent, typeof i2.PagingNavigatorComponent, typeof i3.PagingSelectComponent, typeof i4.PagingStatsComponent, typeof i5.AlternativePagingNavigatorComponent, typeof i6.AlternativePagingPagesComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PagingFeatureModule>;
}
