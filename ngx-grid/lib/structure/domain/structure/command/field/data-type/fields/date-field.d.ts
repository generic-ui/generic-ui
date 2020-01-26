import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnAggregationConfig } from '../../../../../../../composition/domain/column-aggregation.config';
import { AggregationType } from '../../../aggregation/aggregation.type';
export declare class DateField extends Field {
    constructor(id: FieldId, accessor: any, aggregationConfig?: ColumnAggregationConfig);
    assignDefaultAggregations(): AggregationType;
    assignPossibleAggregations(): AggregationType;
}
