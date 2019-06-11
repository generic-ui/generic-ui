import { TemplateRef } from '@angular/core';
import { CellContext } from 'structure/domain/presentation/query/templates/cell-context';
export declare class CellTemplateWithContext {
    template: TemplateRef<any>;
    context: CellContext;
    width: number;
    constructor(template: TemplateRef<any>, context: CellContext, width: number);
}
