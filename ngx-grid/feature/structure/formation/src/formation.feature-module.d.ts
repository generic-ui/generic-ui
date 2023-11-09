import { FeatureModule } from '@generic-ui/hermes';
import { FormationEventRepository } from '../../../../core/structure/formation/src/api/formation.event-repository';
import { FormationPublisher } from '../../../../core/structure/formation/src/api/formation.publisher';
import { FormationWarehouse } from '../../../../core/structure/formation/src/api/formation.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "./select-all/select-all.component";
import * as i2 from "./select-custom/select-custom.component";
import * as i3 from "./select-custom/modal/select-custom-modal.component";
import * as i4 from "@angular/common";
import * as i5 from "../../../gui-angular/template/gui.template.module";
import * as i6 from "@generic-ui/fabric";
export declare function provideFormationCommandInvoker(): FormationPublisher;
export declare function provideFormationWarehouse(): FormationWarehouse;
export declare function provideFormationEventRepository(): FormationEventRepository;
export declare class FormationFeatureModule extends FeatureModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FormationFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormationFeatureModule, [typeof i1.SelectAllComponent, typeof i2.SelectCustomComponent, typeof i3.SelectCustomModalComponent], [typeof i4.CommonModule, typeof i5.GuiTemplateModule, typeof i6.FabricCheckboxModule, typeof i6.FabricTooltipModule], [typeof i1.SelectAllComponent, typeof i2.SelectCustomComponent, typeof i3.SelectCustomModalComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormationFeatureModule>;
}
