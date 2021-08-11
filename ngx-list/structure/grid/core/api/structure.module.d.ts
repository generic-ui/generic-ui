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
    static exportDeclarations: (typeof FabricModule | typeof PagingFeatureModule | typeof StructureComponent | typeof StructureThemeGateway | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent | typeof import("../../../../generic-ui-ngx-list").ɵru | typeof import("../../../../generic-ui-ngx-list").ɵrv | typeof import("../../../../generic-ui-ngx-list").ɵrw | typeof import("../../../../generic-ui-ngx-list").ɵrx | typeof import("../../../../generic-ui-ngx-list").ɵrz | typeof import("../../../../generic-ui-ngx-list").ɵsa | typeof import("../../../../generic-ui-ngx-list").ɵsb | typeof import("../../../../generic-ui-ngx-list").ɵsc | typeof import("../../../../generic-ui-ngx-list").ɵsd | typeof import("../../../../generic-ui-ngx-list").ɵse | typeof import("../../../../generic-ui-ngx-list").ɵsf | typeof import("../../../../generic-ui-ngx-list").ɵsg | typeof import("../../../../generic-ui-ngx-list").ɵsh)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
