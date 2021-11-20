import { GuiRowSelection } from '../../../core/api/gui.grid.public-api';
import { RowSelection } from '../../../../../structure/formation/core/api/row-selected/row-selection';
export declare class GuiGridRowSelectionConverter {
    convert(selection: boolean | GuiRowSelection): RowSelection;
    private convertMode;
    private convertType;
}
