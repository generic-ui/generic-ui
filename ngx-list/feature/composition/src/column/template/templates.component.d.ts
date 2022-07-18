import { TemplateRef } from '@angular/core';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
import { DataType } from '../../../../../core/structure/field/src/domain/field/data/data-type';
export interface TemplatesComponent {
    getTemplate(view: CellView | DataType): TemplateRef<any>;
}
