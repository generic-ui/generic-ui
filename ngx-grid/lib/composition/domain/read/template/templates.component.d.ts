import { TemplateRef } from '@angular/core';
import { CellView } from '../../cell-view';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
export interface TemplatesComponent {
    getTemplate(view: CellView | DataType): TemplateRef<any>;
}
