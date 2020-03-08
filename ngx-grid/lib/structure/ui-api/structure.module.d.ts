import { ModuleWithProviders } from '@angular/core';
import { FabricModule } from '@generic-ui/fabric';
import { StructureComponent } from '../ui/structure.component';
import { StructureHeaderComponent } from '../ui/header/structure-header.component';
import { StructureContentComponent } from '../ui/content/structure-content.component';
import { StructureContainerComponent } from '../ui/content/structure-container.component';
import { StructureDefinition } from '../ui/structure-definition';
import { StructureModuleConfig } from '../ui/structure-module-config';
export declare function createStructureDefinition(): StructureDefinition;
export declare const structureKey = "StructureAggregate";
export declare class StructureModule {
    private platformId;
    static exportDeclarations: (typeof FabricModule | typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureContainerComponent)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
    constructor(platformId: any);
}
