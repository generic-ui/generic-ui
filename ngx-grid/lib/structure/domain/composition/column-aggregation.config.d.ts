import { AggregationType } from '../structure/command/aggregation/aggregation.type';
export interface ColumnAggregationConfig {
    enabled?: boolean;
    aggregationTypes?: Array<AggregationType>;
}
