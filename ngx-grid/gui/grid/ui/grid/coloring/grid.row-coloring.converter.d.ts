import { GuiRowColoring } from '../../../ui-api/grid.api';
import { RowColoring } from '../../../../../lib/structure/ui-api/schema/row-coloring';
export declare class GridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    private convertString;
    private convertEnum;
}
