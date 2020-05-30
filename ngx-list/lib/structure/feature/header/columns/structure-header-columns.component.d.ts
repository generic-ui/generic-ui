import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SortingCommandDispatcher } from '../../../../../structure/sorting/domain-api/sorting.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureHeaderColumnsComponent extends SmartComponent implements OnInit {
    private readonly elementRef;
    private readonly injector;
    private readonly changeDetectorRef;
    private readonly compositionId;
    private readonly structureId;
    private readonly sortingCommandDispatcher;
    columns: Array<CellTemplateWithContext>;
    globalSearching: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, structureId: StructureId, sortingCommandDispatcher: SortingCommandDispatcher);
    ngOnInit(): void;
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
}
