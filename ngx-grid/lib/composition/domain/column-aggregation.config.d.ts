import { AggregationType } from '../../structure/domain/structure/command/aggregation/aggregation.type';
export interface ColumnAggregationConfig {
    enabled?: boolean;
    aggregationTypes?: Array<AggregationType>;
}
