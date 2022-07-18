import { Provider } from '@angular/core';
import { FeatureModule } from '@generic-ui/hermes';
import { SummariesPublisher } from '../../../../core/structure/summaries/src/api/summaries.publisher';
import { SummariesEventRepository } from '../../../../core/structure/summaries/src/api/summaries.event-repository';
import { SummariesWarehouse } from '../../../../core/structure/summaries/src/api/summaries.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "./panel/structure.summaries-panel.component";
import * as i2 from "@angular/common";
import * as i3 from "@generic-ui/fabric";
import * as i4 from "../../../l10n/translation.feature-module";
export declare function provideSummariesCommandInvoker(): SummariesPublisher;
export declare function provideSummariesWarehouse(): SummariesWarehouse;
export declare function provideSummariesEventRepository(): SummariesEventRepository;
export declare class SummariesFeatureModule extends FeatureModule {
    static forComponent(): Array<Provider>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SummariesFeatureModule, [typeof i1.StructureSummariesPanelComponent], [typeof i2.CommonModule, typeof i3.FabricModule, typeof i4.TranslationFeatureModule], [typeof i1.StructureSummariesPanelComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SummariesFeatureModule>;
}
