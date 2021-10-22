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
export declare function createStructureDefinition(): StructureDefinition;
export declare class StructureModule {
    private platformId;
    private static readonly HERMES_API;
    static exportDeclarations: (typeof FabricModule | typeof PagingFeatureModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("../../../../generic-ui-ngx-list").ɵse | typeof import("../../../../generic-ui-ngx-list").ɵsf | typeof import("../../../../generic-ui-ngx-list").ɵsg | typeof import("../../../../generic-ui-ngx-list").ɵsh | typeof import("../../../../generic-ui-ngx-list").ɵsj | typeof import("../../../../generic-ui-ngx-list").ɵsk | typeof import("../../../../generic-ui-ngx-list").ɵsl | typeof import("../../../../generic-ui-ngx-list").ɵsm | typeof import("../../../../generic-ui-ngx-list").ɵsn | typeof import("../../../../generic-ui-ngx-list").ɵso | typeof import("../../../../generic-ui-ngx-list").ɵsp | typeof import("../../../../generic-ui-ngx-list").ɵsq | typeof import("../../../../generic-ui-ngx-list").ɵsr | typeof import("../../../../generic-ui-ngx-list").ɵss | typeof import("../../../../generic-ui-ngx-list").ɵst | typeof import("../../../../generic-ui-ngx-list").ɵsu | typeof import("../../../../generic-ui-ngx-list").ɵsv | typeof import("../../../../generic-ui-ngx-list").ɵsw | typeof import("../../../../generic-ui-ngx-list").ɵsx)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
