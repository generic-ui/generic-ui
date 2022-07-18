import { TemplateRef } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../core/composition/src/core-read/definition/cell-template-with-accessor';
export declare class CompositionAccessorModel extends CellTemplateWithAccessor {
    template: TemplateRef<any> | null;
    editTemplate: TemplateRef<any> | null;
    constructor(template: TemplateRef<any> | null, editTemplate: TemplateRef<any> | null, context: CellTemplateWithAccessor);
}
