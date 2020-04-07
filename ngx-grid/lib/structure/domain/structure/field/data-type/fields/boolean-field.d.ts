import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnAggregationConfig } from '../../../../../../composition/domain/column/column-aggregation.config';
import { AggregationType } from '../../../aggregation/aggregation.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class BooleanField extends Field<boolean> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, aggregationConfig?: ColumnAggregationConfig);
    assignDefaultAggregations(): AggregationType;
    assignPossibleAggregations(): AggregationType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(booleanOne: boolean, booleanTwo: boolean): number;
    filter(value: boolean, filterPhrase: boolean): boolean;
}
