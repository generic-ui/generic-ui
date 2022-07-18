import { CellEditConfig } from '../../../../../../core/structure/structure-core/src/api/edit/cell-edit.config';
import { GuiCellEdit } from '../../../core/api/gui.grid.public-api';
export declare class GuiGridCellEditConverter {
    convert(config: boolean | GuiCellEdit): CellEditConfig;
}
