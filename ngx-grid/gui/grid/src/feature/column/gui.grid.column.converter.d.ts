import { GuiColumn, GuiMultiColumn } from '../../core/api/gui.grid.public-api';
import { ColumnConfig, MultiColumnConfig } from '../../../../../core/composition/src/api/column/column.config';
export declare class GuiGridColumnConverter {
    private readonly columnTypeConverter;
    private readonly columnSummariesConverter;
    private readonly columnViewConverter;
    private readonly columnSortingConverter;
    private readonly columnCellEditingConverter;
    private readonly columnAlignConverter;
    convert(configs: Array<GuiColumn | GuiMultiColumn>): Array<ColumnConfig | MultiColumnConfig>;
    private convertColumn;
}
