import { GuiRowColoring } from '../../../../core/api/gui.grid.public-api';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring';
export declare class GuiGridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    convertToGuiRowColoring(value: RowColoring): GuiRowColoring;
    private convertString;
    private convertEnum;
}
