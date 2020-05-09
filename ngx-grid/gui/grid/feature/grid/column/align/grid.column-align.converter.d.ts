import { GuiColumnAlign } from '../../../../domain-api/grid.api';
import { ColumnAlign } from '../../../../../../lib/composition/domain/column/column-align';
export declare class GridColumnAlignConverter {
    convert(align: string | GuiColumnAlign): ColumnAlign;
    private convertTypeEnum;
    private convertTypeString;
}
