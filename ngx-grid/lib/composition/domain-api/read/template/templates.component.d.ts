import { TemplateRef } from '@angular/core';
import { CellView } from '../../../domain/column/cell-view';
import { DataType } from '../../../../../structure/field/domain/data-type/data-type';
export interface TemplatesComponent {
    getTemplate(view: CellView | DataType): TemplateRef<any>;
}
