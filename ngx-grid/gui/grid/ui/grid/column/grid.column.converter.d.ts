import { GuiColumn } from '../../../ui-api/grid.api';
import { ColumnConfig } from '../../../../../lib/composition/domain/column.config';
export declare class GridColumnConverter {
    private readonly columnTypeConverter;
    private readonly columnAggregationConverter;
    private readonly columnViewConverter;
    convert(config: Array<GuiColumn>): Array<ColumnConfig>;
    private convertColumn;
}
