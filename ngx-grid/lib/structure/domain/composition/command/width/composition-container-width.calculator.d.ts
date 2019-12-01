import { ColumnWidth } from '../column/column-width/column-width';
export declare class CompositionContainerWidthCalculator {
    private readonly MIN_COLUMN_WIDTH;
    constructor(MIN_COLUMN_WIDTH: number);
    calculateMinWidth(columnWidths: Array<ColumnWidth>): number;
    private segregateColumns;
}
