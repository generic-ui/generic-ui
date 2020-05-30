import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../composition/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../composition/domain-api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/smart-component';
import { SortingCommandDispatcher } from '../../../../../../../structure/sorting/domain-api/sorting.command-dispatcher';
import { CompositionId } from '../../../../../../composition/domain/composition.id';
import { StructureId } from '../../../../../domain/structure.id';
export declare class StructureColumnConfigSortComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly sortingCommandDispatcher;
    private readonly compositionReadModelService;
    column: CellTemplateWithContext;
    placement: Placement;
    status: typeof SortOrder;
    sortStatus: SortOrder;
    constructor(changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, sortingCommandDispatcher: SortingCommandDispatcher, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortOrder): void;
}
