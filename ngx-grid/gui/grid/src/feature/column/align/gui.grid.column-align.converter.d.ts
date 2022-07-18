import { GuiColumnAlign } from '../../../core/api/gui.grid.public-api';
import { ColumnAlign } from '../../../../../../core/composition/src/domain/column/column-align';
export declare class GuiGridColumnAlignConverter {
    convert(align: string | GuiColumnAlign): ColumnAlign;
    private convertTypeEnum;
    private convertTypeString;
}
