import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export declare class StringColumnPresentation extends ColumnPresentation {
    private static instance;
    private constructor();
    static getInstance(): StringColumnPresentation;
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(): ColumnAlign;
}
