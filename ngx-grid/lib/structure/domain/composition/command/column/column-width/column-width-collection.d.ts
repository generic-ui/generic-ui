import { ColumnWidth } from './column-width';
import { ColumnConfig } from '../../../column.config';
export declare class ColumnWidthCollection {
    private readonly MIN_COLUMN_WIDTH;
    private baseColumnWidths;
    private columnWidths;
    private width;
    constructor(MIN_COLUMN_WIDTH: number, columns?: Array<ColumnConfig>, width?: number);
    getColumns(): Array<ColumnWidth>;
    getColumnsWidth(): number;
    getWidths(): Array<number>;
    getMinWidth(): number;
    setWidth(width: number): void;
    setColumns(columnConfigs: Array<ColumnConfig>): void;
    private calculate;
    private setContainerWidth;
}
