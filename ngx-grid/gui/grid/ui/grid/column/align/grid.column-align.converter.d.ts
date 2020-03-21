import { GuiColumnAlign } from '../../../../ui-api/grid.api';
import { ColumnAlign } from '../../../../../../lib/composition/domain/column-align';
export declare class GridColumnAlignConverter {
    convert(align: string | GuiColumnAlign): ColumnAlign;
    private convertTypeEnum;
    private convertTypeString;
}
