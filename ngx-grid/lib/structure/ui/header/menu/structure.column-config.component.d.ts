import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { SortStatus } from '../../../domain/composition/command/column/sort/sort-status';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { Placement } from '@generic-ui/fabric';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { StructureColumnMenuConfig } from './config/structure.column-menu-config';
export declare class StructureColumnConfigComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private structureCommandService;
    private compositionReadModelService;
    private structureColumnMenuConfigArchive;
    private column;
    headerSortMenu: ElementRef;
    config: StructureColumnMenuConfig;
    sortStatus: SortStatus;
    status: typeof SortStatus;
    placement: Placement;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandService, compositionReadModelService: CompositionReadModelService, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, column: CellTemplateWithContext);
    ngOnInit(): void;
    isEnabled(): boolean;
    toggleSort(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortStatus): void;
}
