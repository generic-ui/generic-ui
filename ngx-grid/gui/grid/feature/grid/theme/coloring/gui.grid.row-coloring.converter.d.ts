import { GuiRowColoring } from '../../../../domain-api/gui.grid.public-api';
import { RowColoring } from '../../../../../../schema/domain-api/row-coloring';
export declare class GuiGridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    convertToGuiRowColoring(value: RowColoring): GuiRowColoring;
    private convertString;
    private convertEnum;
}
