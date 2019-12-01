import { ColumnWidthType } from './column-width-type';
export declare class ColumnWidth {
    private template;
    private baseWidth;
    private width;
    constructor(width?: number | string);
    getWidth(): number;
    getColumnType(): ColumnWidthType;
    isTypePercentage(): boolean;
    isTypeAuto(): boolean;
    isTypeNumber(): boolean;
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
