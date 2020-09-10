import { GuiColumnAlign } from '../../../../domain-api/gui.grid.public-api';
import { ColumnAlign } from '../../../../../../composition/domain/column/column-align';
export declare class GuiGridColumnAlignConverter {
    convert(align: string | GuiColumnAlign): ColumnAlign;
    private convertTypeEnum;
    private convertTypeString;
}
