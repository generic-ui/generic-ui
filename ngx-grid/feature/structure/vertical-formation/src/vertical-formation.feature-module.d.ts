import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { VerticalFormationPublisher } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.publisher';
import { VerticalFormationWarehouse } from '../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function provideVerticalFormationCommandInvoker(): VerticalFormationPublisher;
export declare function provideVerticalFormationWarehouse(): VerticalFormationWarehouse;
export declare class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalFormationFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<VerticalFormationFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<VerticalFormationFeatureModule>;
}
