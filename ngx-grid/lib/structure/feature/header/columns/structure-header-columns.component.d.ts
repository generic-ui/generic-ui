import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureHeaderColumnsComponent extends SmartComponent implements OnInit {
    private elementRef;
    private injector;
    private changeDetectorRef;
    private structureCommandService;
    columns: Array<CellTemplateWithContext>;
    globalSearching: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandDispatcher);
    ngOnInit(): void;
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
}
