import { GuiRowColoring } from '../../../domain-api/grid.api';
import { RowColoring } from '../../../../../schema/domain-api/row-coloring';
export declare class GridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    convertToGuiRowColoring(value: RowColoring): GuiRowColoring;
    private convertString;
    private convertEnum;
}
