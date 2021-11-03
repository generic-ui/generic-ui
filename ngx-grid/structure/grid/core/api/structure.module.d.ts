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
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("@generic-ui/fabric").FabricBadgeModule[] | (typeof import("../../../../generic-ui-ngx-grid").ɵqh | typeof import("../../../../generic-ui-ngx-grid").ɵqj | typeof import("../../../../generic-ui-ngx-grid").ɵql | typeof import("../../../../generic-ui-ngx-grid").ɵqn | typeof import("../../../../generic-ui-ngx-grid").ɵqp | typeof import("../../../../generic-ui-ngx-grid").ɵqq | typeof import("../../../../generic-ui-ngx-grid").ɵqr | typeof import("../../../../generic-ui-ngx-grid").ɵqs | typeof import("../../../../generic-ui-ngx-grid").ɵqt | typeof import("../../../../generic-ui-ngx-grid").ɵqu | typeof import("../../../../generic-ui-ngx-grid").ɵqv | typeof import("../../../../generic-ui-ngx-grid").ɵqw | typeof import("../../../../generic-ui-ngx-grid").ɵqx | typeof import("../../../../generic-ui-ngx-grid").ɵqy | typeof import("../../../../generic-ui-ngx-grid").ɵqz | typeof import("../../../../generic-ui-ngx-grid").ɵra | typeof import("../../../../generic-ui-ngx-grid").ɵrb | typeof import("../../../../generic-ui-ngx-grid").ɵrc | typeof import("../../../../generic-ui-ngx-grid").ɵrd)[])[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders<StructureModule>;
    constructor(platformId: any);
}
