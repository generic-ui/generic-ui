import { GuiRowSelection } from '../../../domain-api/gui.grid.public-api';
import { RowSelection } from '../../../../../structure/source/domain-api/row-selection';
export declare class GuiGridRowSelectionConverter {
    convert(selection: boolean | GuiRowSelection): RowSelection;
    private convertMode;
    private convertType;
}
