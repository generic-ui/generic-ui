import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortStatus } from '../../../../../../composition/domain/command/column/sort/sort-status';
import { CellTemplateWithContext } from '../../../../../../composition/domain/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../../../ui-api/structure/structure-command.service';
import { CompositionReadModelService } from '../../../../../../composition/ui-api/composition-read-model.service';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
export declare class StructureColumnConfigSortComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private structureCommandService;
    private compositionReadModelService;
    column: CellTemplateWithContext;
    placement: Placement;
    status: typeof SortStatus;
    sortStatus: SortStatus;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandService, compositionReadModelService: CompositionReadModelService);
    ngOnInit(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortStatus): void;
}
