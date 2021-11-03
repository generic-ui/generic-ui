import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export declare class UnknownColumnPresentation extends ColumnPresentation {
    static getInstance(): UnknownColumnPresentation;
    private static instance;
    private constructor();
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(): ColumnAlign;
}
//# sourceMappingURL=unknown-column.presentation.d.ts.map