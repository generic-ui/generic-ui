import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { FieldPublisher } from '../../../../core/structure/field/src/api/field.publisher';
import { FieldWarehouse } from '../../../../core/structure/field/src/api/field.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function provideFieldCommandInvoker(): FieldPublisher;
export declare function provideFieldWarehouse(): FieldWarehouse;
export declare class FieldFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FieldFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FieldFeatureModule>;
}
