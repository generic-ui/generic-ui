import { ModuleWithProviders } from '@angular/core';
import { StructureComponent } from 'structure/ui/structure/structure.component';
import { StructureHeaderComponent } from 'structure/ui/header/structure-header.component';
import { StructureContentComponent } from 'structure/ui/content/structure-content.component';
import { StructureContainerComponent } from 'structure/ui/content/structure-container.component';
import { StructureModuleConfig } from 'structure/ui/structure-module-config';
import 'structure/ui/style/styles.scss';
import 'structure/ui/style/structure.scss';
import 'structure/ui/style/structure-flex.scss';
import 'structure/ui/style/themes/material.structure.scss';
export declare class StructureModule {
    static exportDeclarations: (typeof StructureComponent | typeof StructureHeaderComponent | typeof StructureContentComponent | typeof StructureContainerComponent | typeof import("util/fabric/ui/buttons-indicators/badge/fabric-badge.module").FabricBadgeModule)[];
    static withConfig(structureConfig?: StructureModuleConfig): ModuleWithProviders;
}
