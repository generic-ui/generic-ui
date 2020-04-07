import { ColumnAggregationConfig } from '../../../../../../lib/composition/domain/column/column-aggregation.config';
import { GuiColumnAggregation } from '../../../../../../grid.index';
export declare class GridColumnAggregationConverter {
    convert(aggregationConfig: GuiColumnAggregation): ColumnAggregationConfig;
    private convertAggregationTypes;
    private convertAggregationType;
}
