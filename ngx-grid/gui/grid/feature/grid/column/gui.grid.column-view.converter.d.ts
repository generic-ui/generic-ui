import { GuiCellView, ViewTemplateMethod } from '../../../domain-api/gui.grid.public-api';
import { CellView } from '../../../../../lib/composition/domain/column/cell-view';
export declare class GuiGridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateMethod): CellView | ViewTemplateMethod;
    private convertString;
    private convertEnum;
}
