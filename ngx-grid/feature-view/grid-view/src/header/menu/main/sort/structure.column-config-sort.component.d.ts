import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../core/composition/src/domain/column/sort/sort-order';
import { CellTemplateWithContext } from '../../../../../../../core/composition/src/core-read/definition/cell-template-with-context';
import { CompositionWarehouse } from '../../../../../../../core/composition/src/api/composition.warehouse';
import { SmartComponent } from '../../../../../../../feature/common/component/src/smart-component';
import { SortingPublisher } from '../../../../../../../core/structure/sorting/src/api/sorting.publisher';
import { CompositionId } from '../../../../../../../core/composition/src/api/global/composition.id';
import { StructureId } from '../../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { StructureArrowPosition } from '../../../../../../../feature/common/icons/arrow/strucutre.arrow-position';
import { FieldId } from '../../../../../../../core/structure/field/src/domain/field/field.id';
import { HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export interface StructureColumnConfigSortComponentState {
    fieldId: FieldId;
    sortOrder: SortOrder;
}
export declare class StructureColumnConfigSortComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly sortingCommandDispatcher;
    private readonly compositionReadModelService;
    set column(column: CellTemplateWithContext);
    dropdownTextTranslation: string;
    private readonly state;
    readonly placement = Placement.Right;
    readonly status: typeof SortOrder;
    readonly StructureArrowPosition: typeof StructureArrowPosition;
    readonly sortOrder$: HermesObservable<any>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, compositionId: CompositionId, structureId: StructureId, sortingCommandDispatcher: SortingPublisher, compositionReadModelService: CompositionWarehouse);
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoneSort(): boolean;
    setSortOrder(sort: SortOrder): void;
    protected getSelectorName(): string;
    private selectSortOrder;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnConfigSortComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureColumnConfigSortComponent, "div[gui-structure-column-config-sort][column][dropdownTextTranslation]", never, { "column": { "alias": "column"; "required": false; }; "dropdownTextTranslation": { "alias": "dropdownTextTranslation"; "required": false; }; }, {}, never, never, false, never>;
}
