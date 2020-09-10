import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SortingCommandInvoker } from '../../../../sorting/domain-api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
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
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, formationCommandDispatcher: FormationCommandInvoker, sortingCommandDispatcher: SortingCommandInvoker);
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
}
