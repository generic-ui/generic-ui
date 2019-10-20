import { ColumnAggregationConfig } from '../../../../../lib/structure/domain/composition/column-aggregation.config';
import { GuiColumnAggregation } from '../../../../../grid.index';
export declare class GridColumnAggregationConverter {
    convert(aggregationConfig: GuiColumnAggregation): ColumnAggregationConfig;
    private convertAggregationTypes;
    private convertAggregationType;
}
