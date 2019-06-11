import { Column } from 'structure/domain/presentation/column';
export declare class ColumnWidthCollection {
    private baseColumnWidths;
    private columnWidths;
    private width;
    constructor(columns?: Array<Column>, width?: number);
    setWidth(width: number): void;
    setColumns(columns: Array<Column>): void;
    getWidths(): Array<number>;
    private calculate;
}
