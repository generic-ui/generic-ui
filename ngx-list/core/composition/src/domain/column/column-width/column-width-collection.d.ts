import { ColumnWidth } from './column-width';
import { ColumnConfig } from '../../../api/column/column.config';
export declare class ColumnWidthCollection {
    private readonly MIN_COLUMN_WIDTH;
    private baseColumnWidths;
    private columnWidths;
    private width;
    constructor(MIN_COLUMN_WIDTH: number, columns?: Array<ColumnConfig>, width?: number);
    getColumnWidths(): Array<ColumnWidth>;
    getColumnsWidth(): number;
    getWidths(): Array<number>;
    getMinWidth(): number;
    setWidth(width: number): void;
    setColumns(columnConfigs: Array<ColumnConfig>): void;
    getMinColumnWidth(): number;
    private calculate;
    private setContainerWidth;
}
