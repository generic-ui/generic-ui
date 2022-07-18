import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SortingPublisher } from '../../../../core/structure/sorting/src/api/sorting.publisher';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function provideSortingCommandInvoker(): SortingPublisher;
export declare class SortingFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortingFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SortingFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SortingFeatureModule>;
}
