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
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("@generic-ui/fabric").FabricBadgeModule[] | (typeof import("../../../../generic-ui-ngx-list").ɵsz | typeof import("../../../../generic-ui-ngx-list").ɵta | typeof import("../../../../generic-ui-ngx-list").ɵtb | typeof import("../../../../generic-ui-ngx-list").ɵtc | typeof import("../../../../generic-ui-ngx-list").ɵte | typeof import("../../../../generic-ui-ngx-list").ɵtf | typeof import("../../../../generic-ui-ngx-list").ɵtg | typeof import("../../../../generic-ui-ngx-list").ɵth | typeof import("../../../../generic-ui-ngx-list").ɵti | typeof import("../../../../generic-ui-ngx-list").ɵtj | typeof import("../../../../generic-ui-ngx-list").ɵtk | typeof import("../../../../generic-ui-ngx-list").ɵtl | typeof import("../../../../generic-ui-ngx-list").ɵtm | typeof import("../../../../generic-ui-ngx-list").ɵtn | typeof import("../../../../generic-ui-ngx-list").ɵto | typeof import("../../../../generic-ui-ngx-list").ɵtp | typeof import("../../../../generic-ui-ngx-list").ɵtq | typeof import("../../../../generic-ui-ngx-list").ɵtr | typeof import("../../../../generic-ui-ngx-list").ɵts)[])[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders<StructureModule>;
    constructor(platformId: any);
}
