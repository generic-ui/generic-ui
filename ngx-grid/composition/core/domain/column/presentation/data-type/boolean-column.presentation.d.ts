import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
import { ViewEntity } from '../../view.entity';
export declare class BooleanColumnPresentation extends ColumnPresentation {
    static getInstance(): BooleanColumnPresentation;
    private static instance;
    private constructor();
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(view: ViewEntity): ColumnAlign;
}
//# sourceMappingURL=boolean-column.presentation.d.ts.map