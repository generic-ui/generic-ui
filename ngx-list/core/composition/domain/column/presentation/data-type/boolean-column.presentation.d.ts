import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
import { ViewEntity } from '../../view.entity';
export declare class BooleanColumnPresentation extends ColumnPresentation {
    private static instance;
    private constructor();
    static getInstance(): BooleanColumnPresentation;
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(view: ViewEntity): ColumnAlign;
}
