import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureCommandDispatcher } from '../../../ui-api/structure/structure.command-dispatcher';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelWarehouse } from '../../../../composition/ui-api/composition.read-model-warehouse';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './config/structure.column-menu-config';
export declare class StructureColumnConfigComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private structureCommandService;
    private compositionReadModelService;
    private structureColumnMenuConfigArchive;
    column: CellTemplateWithContext;
    headerSortMenu: ElementRef;
    config: StructureColumnMenuConfig;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandDispatcher, compositionReadModelService: CompositionReadModelWarehouse, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
}
