import { EventEmitter } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
export declare class ColumnSelectorComponent {
    columns: Array<CellTemplateWithContext>;
    columnSelected: EventEmitter<CellTemplateWithContext>;
    onSelectChange(column: CellTemplateWithContext): void;
}
