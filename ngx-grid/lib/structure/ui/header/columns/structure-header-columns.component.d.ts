import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureHeaderColumnsComponent extends SmartComponent implements OnInit {
    private elementRef;
    private injector;
    private changeDetectorRef;
    private structureCommandService;
    columns: Array<CellTemplateWithContext>;
    globalSearching: boolean;
    constructor(elementRef: ElementRef, injector: Injector, changeDetectorRef: ChangeDetectorRef, structureCommandService: StructureCommandService);
    ngOnInit(): void;
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    isGlobalSortEnabled(): boolean;
}
