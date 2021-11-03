import { TemplateRef } from '@angular/core';
import { CellView } from '../../domain/column/cell-view';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
export interface TemplatesComponent {
    getTemplate(view: CellView | DataType): TemplateRef<any>;
}
