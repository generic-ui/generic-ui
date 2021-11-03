import { CellView } from '../cell-view';
import { ColumnAlign } from '../column-align';
import { ViewEntity } from '../view.entity';
export declare abstract class ColumnPresentation {
    abstract getPossibleViews(): Array<CellView>;
    abstract getDefaultView(): CellView;
    abstract getDefaultAlign(view: ViewEntity): ColumnAlign;
}
