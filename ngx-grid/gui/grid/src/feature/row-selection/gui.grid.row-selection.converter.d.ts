import { GuiRowSelection } from '../../core/api/gui.grid.public-api';
import { RowSelection } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
export declare class GuiGridRowSelectionConverter {
    convert(selection: boolean | GuiRowSelection): RowSelection;
    private convertMode;
    private convertType;
    private convertMatcher;
    private convertCustomSelection;
}
