import { GuiCellView, ViewTemplateMethod } from '../../../domain-api/grid.api';
import { CellView } from '../../../../../lib/composition/domain/column/cell-view';
export declare class GridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateMethod): CellView | ViewTemplateMethod;
    private convertString;
    private convertEnum;
}
