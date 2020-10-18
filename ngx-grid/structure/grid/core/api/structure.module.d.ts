import { ModuleWithProviders } from '@angular/core';
import { FabricModule } from '@generic-ui/fabric';
import { StructureComponent } from '../../feature/structure.component';
import { StructureHeaderComponent } from '../../feature/header/structure-header.component';
import { StructureContentComponent } from '../../feature/content/structure-content.component';
import { StructureRowComponent } from '../../feature/content/row/structure-row.component';
import { StructureContainerComponent } from '../../feature/content/structure-container.component';
import { StructureDefinition } from '../../feature/structure-definition';
import { StructureModuleConfig } from '../../feature/structure-module-config';
import { StructureThemeGateway } from '../../feature/gateway/schema/structure-theme.gateway';
export declare function createStructureDefinition(): StructureDefinition;
export declare class StructureModule {
    private platformId;
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureThemeGateway | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureRowComponent | typeof StructureContainerComponent)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
