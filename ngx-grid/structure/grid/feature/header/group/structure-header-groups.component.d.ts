import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SortingCommandInvoker } from '../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { Group } from '../../../../../composition/core/api/group/group';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class StructureHeaderGroupsComponent extends PureComponent {
    private readonly elementRef;
    private readonly injector;
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly formationCommandDispatcher;
    private readonly sortingCommandDispatcher;
    groups: Array<Group>;
    showGroups: boolean;
    checkboxSelection: boolean;
    globalSearching: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, formationCommandDispatcher: FormationCommandInvoker, sortingCommandDispatcher: SortingCommandInvoker);
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
    protected getSelectorName(): string;
}
