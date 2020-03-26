import { CellView } from '../../../cell-view';
import { ColumnAlign } from '../../../column-align';
export declare abstract class ColumnPresentation {
    abstract getPossibleViews(): Array<CellView>;
    abstract getDefaultView(): CellView;
    abstract getDefaultAlign(): ColumnAlign;
}
