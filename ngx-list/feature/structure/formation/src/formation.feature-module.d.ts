import { FeatureModule } from '@generic-ui/hermes';
import { FormationEventRepository } from '../../../../core/structure/formation/src/api/formation.event-repository';
import { FormationPublisher } from '../../../../core/structure/formation/src/api/formation.publisher';
import { FormationWarehouse } from '../../../../core/structure/formation/src/api/formation.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare function provideFormationCommandInvoker(): FormationPublisher;
export declare function provideFormationWarehouse(): FormationWarehouse;
export declare function provideFormationEventRepository(): FormationEventRepository;
export declare class FormationFeatureModule extends FeatureModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormationFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormationFeatureModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormationFeatureModule>;
}
