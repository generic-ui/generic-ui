import { TemplateRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../core/composition/src/core-read/definition/cell-template-with-context';
export declare class CompositionTemplateModel extends CellTemplateWithContext {
    viewTemplate: TemplateRef<any> | null;
    editTemplate: TemplateRef<any> | null;
    constructor(viewTemplate: TemplateRef<any> | null, editTemplate: TemplateRef<any> | null, context: CellTemplateWithContext);
}
