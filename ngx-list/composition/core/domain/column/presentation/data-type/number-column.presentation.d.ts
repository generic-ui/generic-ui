import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
import { ViewEntity } from '../../view.entity';
export declare class NumberColumnPresentation extends ColumnPresentation {
    private static instance;
    private constructor();
    static getInstance(): NumberColumnPresentation;
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(view: ViewEntity): ColumnAlign;
}
