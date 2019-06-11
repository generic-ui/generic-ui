import { ColumnWidth } from 'structure/domain/presentation/command/column/column-width';
export declare class PresentationWidthCalculator {
    private source;
    private width;
    private readonly MIN_COLUMN_WIDTH;
    private columns;
    constructor(source: Array<ColumnWidth>, width: number);
    calculate(): Array<ColumnWidth>;
    private adjustMinimalWidth;
    private adjustPercentageWidth;
    private adjustAutoWidth;
}
