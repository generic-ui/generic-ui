import { GuiCellView, ViewTemplateFunction } from '../../core/api/gui.grid.public-api';
import { CellView } from '../../../../../core/composition/src/domain/column/cell-view';
export declare class GuiGridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateFunction): CellView | ViewTemplateFunction;
    private convertString;
    private convertEnum;
}
