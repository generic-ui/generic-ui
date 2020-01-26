import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../../composition/ui-api/composition-read-model.service';
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
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandService, compositionReadModelService: CompositionReadModelService, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
}
