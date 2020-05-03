import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/feature-api/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../../../feature-api/structure.command-dispatcher';
import { CompositionWarehouse } from '../../../../../../composition/feature-api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
export declare class StructureColumnConfigSortComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private structureCommandService;
    private compositionReadModelService;
    column: CellTemplateWithContext;
    placement: Placement;
    status: typeof SortOrder;
    sortStatus: SortOrder;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandDispatcher, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortOrder): void;
}
