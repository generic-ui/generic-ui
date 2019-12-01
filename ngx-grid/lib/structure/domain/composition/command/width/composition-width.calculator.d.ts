import { ColumnWidth } from '../column/column-width/column-width';
export declare class CompositionWidthCalculator {
    private source;
    private width;
    private readonly MIN_COLUMN_WIDTH;
    private readonly columns;
    constructor(source: Array<ColumnWidth>, width: number, MIN_COLUMN_WIDTH: number);
    calculate(): Array<ColumnWidth>;
    private adjustMinimalWidth;
    private adjustPercentageWidth;
    private adjustAutoWidth;
}
