import { GuiCellView, ViewTemplateFunction } from '../../../core/api/gui.grid.public-api';
import { CellView } from '../../../../../composition/core/domain/column/cell-view';
export declare class GuiGridColumnViewConverter {
    convert(view: string | GuiCellView | ViewTemplateFunction): CellView | ViewTemplateFunction;
    private convertString;
    private convertEnum;
}
//# sourceMappingURL=gui.grid.column-view.converter.d.ts.map