import { GuiRowColoring } from '../../../feature-api/grid.api';
import { RowColoring } from '../../../../../lib/schema/feature-api/row-coloring';
export declare class GridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    convertToGuiRowColoring(value: RowColoring): GuiRowColoring;
    private convertString;
    private convertEnum;
}
