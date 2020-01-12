import { ElementRef, Injector } from '@angular/core';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
export declare class StructureHeaderColumnsComponent {
    private elementRef;
    private injector;
    private structureCommandService;
    columns: Array<CellTemplateWithContext>;
    constructor(elementRef: ElementRef, injector: Injector, structureCommandService: StructureCommandService);
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
}
