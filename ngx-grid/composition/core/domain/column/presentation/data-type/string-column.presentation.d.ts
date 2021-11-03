import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export declare class StringColumnPresentation extends ColumnPresentation {
    static getInstance(): StringColumnPresentation;
    private static instance;
    private constructor();
    getPossibleViews(): Array<CellView>;
    getDefaultView(): CellView;
    getDefaultAlign(): ColumnAlign;
}
//# sourceMappingURL=string-column.presentation.d.ts.map