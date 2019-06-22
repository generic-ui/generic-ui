import { ColumnWidthType } from 'structure/domain/presentation/command/column/column-width-type';
export declare class ColumnWidth {
    private columnType;
    private baseWidth;
    private width;
    constructor(width: number | string);
    getWidth(): number;
    getColumnType(): ColumnWidthType;
    setWidth(width: number): void;
    setWidthAndType(width: number | string): void;
    clone(): ColumnWidth;
    private isPercentage;
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    private percentageToNumber;
    private isStringNumber;
}
