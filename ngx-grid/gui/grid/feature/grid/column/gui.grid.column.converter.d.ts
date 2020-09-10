import { GuiColumn } from '../../../domain-api/gui.grid.public-api';
import { ColumnConfig } from '../../../../../composition/domain/column/column.config';
export declare class GuiGridColumnConverter {
    private readonly columnTypeConverter;
    private readonly columnSummariesConverter;
    private readonly columnViewConverter;
    private readonly columnSortingConverter;
    private readonly columnCellEditingConverter;
    private readonly columnAlignConverter;
    convert(config: Array<GuiColumn>): Array<ColumnConfig>;
    private convertColumn;
}
