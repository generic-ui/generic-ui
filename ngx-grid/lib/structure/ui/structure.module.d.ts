import { ModuleWithProviders } from '@angular/core';
import { FabricModule } from '@generic-ui/fabric';
import { StructureComponent } from './structure.component';
import { StructureHeaderComponent } from './header/structure-header.component';
import { StructureContentComponent } from './content/structure-content.component';
import { StructureContainerComponent } from './content/structure-container.component';
import { StructureDefinition } from './structure-definition';
import { StructureModuleConfig } from './structure-module-config';
export declare function createStructureDefinition(): StructureDefinition;
export declare class StructureModule {
    private platformId;
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureContainerComponent)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
