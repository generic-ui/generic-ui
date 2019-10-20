import { GuiColumn } from '../../../../grid/app/grid.api';
import { ColumnConfig } from '../../../../../lib/structure/domain/composition/column.config';
export declare class GridColumnConverter {
    private readonly columnTypeConverter;
    private readonly columnAggregationConverter;
    private readonly columnViewConverter;
    convert(config: Array<GuiColumn>): Array<ColumnConfig>;
    private convertColumn;
}
