import { CellView } from '../../cell-view';
import { ColumnId } from './column.id';
import { ColumnField } from './field/column-field';
import { HeaderTemplate } from '../../column.config';
import { SortStatus } from '../sort/sort-status';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../structure/command/field/data-type/data-type';
export declare class ColumnEntity {
    columnId: ColumnId;
    columnField: ColumnField;
    header?: string | HeaderTemplate;
    sortStatus: SortStatus;
    width?: number;
    sortable?: boolean;
    private view;
    constructor(columnField: ColumnField, header?: string | HeaderTemplate, view?: ViewEntity, width?: number);
    getField(): ColumnField;
    getHeader(): string | HeaderTemplate;
    getDataType(): DataType;
    getCellView(): CellView;
    getTemplateFunction(): any;
    setSortStatus(status: SortStatus): void;
    setView(view: ViewEntity): void;
}
