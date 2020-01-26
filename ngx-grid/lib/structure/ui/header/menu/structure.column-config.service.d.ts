import { ElementRef, Injector } from '@angular/core';
import { FabricInlineDialogService } from '@generic-ui/fabric';
import { CellTemplateWithContext } from '../../../../composition/domain/read/definition/cell-template-with-context';
export declare class StructureColumnConfigService {
    private injector;
    private inlineDialogService;
    constructor(injector: Injector, inlineDialogService: FabricInlineDialogService);
    open(elementRef: ElementRef, column: CellTemplateWithContext): void;
    close(): void;
}
