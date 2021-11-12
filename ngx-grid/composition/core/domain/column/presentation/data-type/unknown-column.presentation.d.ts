import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export declare class UnknownColumnPresentation extends ColumnPresentation {
    private static instance;
    private constructor();
    static getInstance(): UnknownColumnPresentation;
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(): ColumnAlign;
}
