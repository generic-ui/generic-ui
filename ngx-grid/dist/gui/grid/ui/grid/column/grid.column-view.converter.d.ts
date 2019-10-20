import { GuiCellView } from '../../../../grid/app/grid.api';
import { CellView } from '../../../../../lib/structure/domain/composition/cell-view';
export declare class GridColumnViewConverter {
    convert(view: string | GuiCellView): CellView;
    private convertString;
    private convertEnum;
}
