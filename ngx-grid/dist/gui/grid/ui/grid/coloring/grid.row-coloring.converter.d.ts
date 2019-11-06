import { GuiRowColoring } from '../../../../grid/app/grid.api';
import { RowColoring } from '../../../../../lib/structure/app/schema/row-coloring';
export declare class GridRowColoringConverter {
    convert(rowColoring: string | GuiRowColoring): RowColoring;
    private convertString;
    private convertEnum;
}
