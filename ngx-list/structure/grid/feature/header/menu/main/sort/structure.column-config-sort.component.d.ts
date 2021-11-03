import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../composition/core/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../../../common/cdk/component/smart-component';
import { SortingCommandInvoker } from '../../../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../../../core/api/structure.id';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigSortComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigSortComponent, "div[gui-structure-column-config-sort]", never, { "column": "column"; "dropdownTextTranslation": "dropdownTextTranslation"; }, {}, never, never>;
}
//# sourceMappingURL=structure.column-config-sort.component.d.ts.map