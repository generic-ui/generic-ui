import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SourcePublisher } from '../../../../core/structure/source/src/api/source.publisher';
import { SourceWarehouse } from '../../../../core/structure/source/src/api/source.warehouse';
import { SourceEventService } from '../../../../core/structure/source/src/api/edit/source-event.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function provideSourceCommandInvoker(): SourcePublisher;
export declare function provideSourceWarehouse(): SourceWarehouse;
export declare function provideSourceEventRepository(): SourceEventService;
export declare class SourceFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SourceFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SourceFeatureModule>;
}
