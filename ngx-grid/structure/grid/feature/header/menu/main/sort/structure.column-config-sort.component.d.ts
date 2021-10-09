import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/core/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/component/smart-component';
import { SortingCommandInvoker } from '../../../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../../../composition/core/domain/composition.id';
import { StructureId } from '../../../../../../core/api/structure.id';
export declare class StructureColumnConfigSortComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly sortingCommandDispatcher;
    private readonly compositionReadModelService;
    column: CellTemplateWithContext;
    dropdownTextTranslation: string;
    placement: Placement;
    status: typeof SortOrder;
    sortStatus: SortOrder;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, structureId: StructureId, sortingCommandDispatcher: SortingCommandInvoker, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortOrder): void;
    protected getSelectorName(): string;
}
