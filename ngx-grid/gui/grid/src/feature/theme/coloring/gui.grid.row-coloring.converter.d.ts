import { GuiRowColoring } from '../../../core/api/gui.grid.public-api';
import { RowColoring } from '../../../../../../core/schema/src/api/row-coloring/row-coloring';
export declare class GuiGridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    convertToGuiRowColoring(value: RowColoring): GuiRowColoring;
    private convertString;
    private convertEnum;
}
