import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../core/composition/core-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../feature/common/cdk/component/smart-component';
import { SortingPublisher } from '../../../../core/structure/sorting/api/sorting.publisher';
import { CompositionId } from '../../../../core/composition/api/global/composition.id';
import { StructureId } from '../../../../core/structure/structure-core/api/global/structure.id';
import { FormationPublisher } from '../../../../core/structure/formation/api/formation.publisher';
import * as i0 from "@angular/core";
export declare class StructureHeaderColumnsComponent extends SmartComponent {
    private readonly elementRef;
    private readonly injector;
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly sortingCommandDispatcher;
    columns: Array<CellTemplateWithContext>;
    checkboxSelection: boolean;
    globalSearching: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, formationCommandDispatcher: FormationPublisher, sortingCommandDispatcher: SortingPublisher);
    toggleSort(column: CellTemplateWithContext): void;
    isGlobalSortEnabled(): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderColumnsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderColumnsComponent, "div[gui-structure-header-columns][columns]", never, { "columns": "columns"; "checkboxSelection": "checkboxSelection"; }, {}, never, never, false>;
}
