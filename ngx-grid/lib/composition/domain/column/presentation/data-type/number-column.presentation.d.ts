import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export declare class NumberColumnPresentation extends ColumnPresentation {
    static getInstance(): NumberColumnPresentation;
    private static instance;
    private constructor();
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(): ColumnAlign;
}
