import { ModuleWithProviders } from '@angular/core';
import { FabricModule } from '@generic-ui/fabric';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureDefinition } from '../../feature/structure-definition';
import { StructureModuleConfig } from '../../feature/structure-module-config';
export declare function createStructureDefinition(): StructureDefinition;
export declare class StructureModule {
    private platformId;
    private static readonly HERMES_API;
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("@generic-ui/fabric").FabricBadgeModule[] | (typeof import("../../../../generic-ui-ngx-grid").ɵrc | typeof import("../../../../generic-ui-ngx-grid").ɵre | typeof import("../../../../generic-ui-ngx-grid").ɵrg | typeof import("../../../../generic-ui-ngx-grid").ɵri | typeof import("../../../../generic-ui-ngx-grid").ɵrk | typeof import("../../../../generic-ui-ngx-grid").ɵrl | typeof import("../../../../generic-ui-ngx-grid").ɵrm | typeof import("../../../../generic-ui-ngx-grid").ɵrn | typeof import("../../../../generic-ui-ngx-grid").ɵro | typeof import("../../../../generic-ui-ngx-grid").ɵrp | typeof import("../../../../generic-ui-ngx-grid").ɵrq | typeof import("../../../../generic-ui-ngx-grid").ɵrr | typeof import("../../../../generic-ui-ngx-grid").ɵrs | typeof import("../../../../generic-ui-ngx-grid").ɵrt | typeof import("../../../../generic-ui-ngx-grid").ɵru | typeof import("../../../../generic-ui-ngx-grid").ɵrv | typeof import("../../../../generic-ui-ngx-grid").ɵrw | typeof import("../../../../generic-ui-ngx-grid").ɵrx | typeof import("../../../../generic-ui-ngx-grid").ɵry)[])[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders<StructureModule>;
    constructor(platformId: any);
}
