import { GuiCellView, ViewTemplateMethod } from '../../../ui-api/grid.api';
import { CellView } from '../../../../../lib/composition/domain/cell-view';
export declare class GridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateMethod): CellView | ViewTemplateMethod;
    private convertString;
    private convertEnum;
}
