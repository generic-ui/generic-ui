import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../../core/composition/core-read/definition/cell-template-with-context';
import { SortingPublisher } from '../../../../core/structure/sorting/api/sorting.publisher';
import { CompositionId } from '../../../../core/composition/api/global/composition.id';
import { StructureId } from '../../../../core/structure/structure-core/api/global/structure.id';
import { FormationPublisher } from '../../../../core/structure/formation/api/formation.publisher';
import { Group } from '../../../../core/composition/api/group/group';
import { PureComponent } from '../../../../feature/common/cdk/component/pure-component';
import * as i0 from "@angular/core";
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
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, formationCommandDispatcher: FormationPublisher, sortingCommandDispatcher: SortingPublisher);
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureHeaderGroupsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureHeaderGroupsComponent, "div[gui-structure-header-groups][groups][checkboxSelection]", never, { "groups": "groups"; "showGroups": "showGroups"; "checkboxSelection": "checkboxSelection"; }, {}, never, never, false>;
}
