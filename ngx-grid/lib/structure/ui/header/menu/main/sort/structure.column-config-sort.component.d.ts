import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../../../ui-api/structure/structure.command-dispatcher';
import { CompositionReadModelWarehouse } from '../../../../../../composition/ui-api/composition.read-model-warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
export declare class StructureColumnConfigSortComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private structureCommandService;
    private compositionReadModelService;
    column: CellTemplateWithContext;
    placement: Placement;
    status: typeof SortOrder;
    sortStatus: SortOrder;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandDispatcher, compositionReadModelService: CompositionReadModelWarehouse);
    ngOnInit(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortOrder): void;
}
