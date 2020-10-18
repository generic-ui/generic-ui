import { GuiColumnAlign } from '../../../../core/api/gui.grid.public-api';
import { ColumnAlign } from '../../../../../../composition/core/domain/column/column-align';
export declare class GuiGridColumnAlignConverter {
    convert(align: string | GuiColumnAlign): ColumnAlign;
    private convertTypeEnum;
    private convertTypeString;
}
