import { SortOrder } from '../sort/sort-order';
import { ColumnField } from '../field/column-field';
import { ColumnId } from '../column.id';
import { ColumnConfig, HeaderTemplate } from '../../../column.config';
import { ViewEntity } from '../view.entity';
import { ColumnAlign } from '../../../column-align';
import { AbstractColumnEntity } from '../abstract-column.entity';
export declare class ActiveColumnEntity extends AbstractColumnEntity {
    private sortStatus;
    constructor(columnId: ColumnId, columnField: ColumnField, header: string | HeaderTemplate, align: ColumnAlign, view: ViewEntity, config: ColumnConfig);
    getSortStatus(): SortOrder;
    setSortStatus(status: SortOrder): void;
}
