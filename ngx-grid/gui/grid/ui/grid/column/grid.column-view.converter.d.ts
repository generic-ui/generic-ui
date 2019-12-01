import { GuiCellView, ViewTemplateMethod } from '../../../../grid/app/grid.api';
import { CellView } from '../../../../../lib/structure/domain/composition/cell-view';
export declare class GridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateMethod): CellView | ViewTemplateMethod;
    private convertString;
    private convertEnum;
}
