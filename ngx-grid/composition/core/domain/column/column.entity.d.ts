import { ColumnId } from '../../api/column/column.id';
import { ColumnField } from './field/column-field';
import { ColumnConfig, HeaderTemplate } from '../../api/column/column.config';
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
import { ColumnAlign } from './column-align';
import { AbstractColumnEntity } from './abstract-column.entity';
import { ColumnPresentation } from './presentation/column.presentation';
export declare class ColumnEntity extends AbstractColumnEntity {
    sortable?: boolean;
    private sortStatus;
    private enabled;
    constructor(columnId: ColumnId, columnField: ColumnField, columnConfig: ColumnConfig, enabled: boolean, presentation: ColumnPresentation, header: string | HeaderTemplate, align: ColumnAlign, view: ViewEntity, width: number);
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    getSortStatus(): SortOrder;
    setSortStatus(status: SortOrder): void;
}
