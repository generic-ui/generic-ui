import { ColumnId } from './column.id';
import { ColumnField } from './field/column-field';
import { ColumnConfig, HeaderTemplate } from '../../column.config';
import { SortOrder } from './sort/sort-order';
import { ViewEntity } from './view.entity';
import { ColumnAlign } from '../../column-align';
import { AbstractColumnEntity } from './abstract-column.entity';
export declare class ColumnEntity extends AbstractColumnEntity {
    sortOrder: SortOrder;
    sortable?: boolean;
    private enabled;
    constructor(columnId: ColumnId, columnField: ColumnField, columnConfig: ColumnConfig, header?: string | HeaderTemplate, align?: ColumnAlign, view?: ViewEntity, width?: number);
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    setSortStatus(status: SortOrder): void;
}
