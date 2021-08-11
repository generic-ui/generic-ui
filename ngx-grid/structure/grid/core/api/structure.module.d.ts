import { ModuleWithProviders } from '@angular/core';
import { FabricModule } from '@generic-ui/fabric';
import { PagingFeatureModule } from '../../../paging/feature/paging.feature-module';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureDefinition } from '../../feature/structure-definition';
import { StructureModuleConfig } from '../../feature/structure-module-config';
import { StructureThemeGateway } from '../../feature/gate/schema/structure-theme.gateway';
export declare function createStructureDefinition(): StructureDefinition;
export declare class StructureModule {
    private platformId;
    private static readonly HERMES_API;
    static exportDeclarations: (typeof FabricModule | typeof PagingFeatureModule | typeof StructureComponent | typeof StructureThemeGateway | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("../../../../generic-ui-ngx-grid").ɵpz | typeof import("../../../../generic-ui-ngx-grid").ɵqb | typeof import("../../../../generic-ui-ngx-grid").ɵqd | typeof import("../../../../generic-ui-ngx-grid").ɵqf | typeof import("../../../../generic-ui-ngx-grid").ɵqh | typeof import("../../../../generic-ui-ngx-grid").ɵqi | typeof import("../../../../generic-ui-ngx-grid").ɵqj | typeof import("../../../../generic-ui-ngx-grid").ɵqk | typeof import("../../../../generic-ui-ngx-grid").ɵql | typeof import("../../../../generic-ui-ngx-grid").ɵqm | typeof import("../../../../generic-ui-ngx-grid").ɵqn | typeof import("../../../../generic-ui-ngx-grid").ɵqo | typeof import("../../../../generic-ui-ngx-grid").ɵqp)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
