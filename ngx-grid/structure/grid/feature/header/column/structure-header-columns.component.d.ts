import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { SortingCommandInvoker } from '../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
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
    protected getSelectorName(): string;
}
