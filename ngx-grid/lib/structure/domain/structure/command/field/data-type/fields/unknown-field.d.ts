import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnAggregationConfig } from '../../../../../../../composition/domain/column-aggregation.config';
import { AggregationType } from '../../../aggregation/aggregation.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../source/command/origin/origin-item-entity';
export declare class UnknownField extends Field<any> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, aggregationConfig?: ColumnAggregationConfig);
    assignDefaultAggregations(): AggregationType;
    assignPossibleAggregations(): AggregationType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(one: any, two: any): number;
    filter(value: any, filterPhrase: any): boolean;
}
