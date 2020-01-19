import { SortStatus } from '../sort/sort-status';
import { ColumnField } from '../field/column-field';
import { ColumnId } from '../column.id';
import { ColumnConfig, HeaderTemplate } from '../../../column.config';
import { DataType } from '../../../../structure/command/field/data-type/data-type';
import { CellView } from '../../../cell-view';
import { ViewEntity } from '../view.entity';
export declare class ActiveColumnEntity {
    private columnId;
    private columnField;
    private sortStatus;
    private width;
    private header;
    private view;
    private config;
    constructor(columnId: ColumnId, columnField: ColumnField, header: string | HeaderTemplate, view: ViewEntity, config: ColumnConfig);
    getConfig(): ColumnConfig;
    getSortStatus(): SortStatus;
    getField(): ColumnField;
    getWidth(): number;
    getColumnId(): ColumnId;
    getHeader(): string | HeaderTemplate;
    getDataType(): DataType;
    getCellView(): CellView;
    getTemplateFunction(): any;
    setSortStatus(status: SortStatus): void;
    setWidth(width: number): void;
}
