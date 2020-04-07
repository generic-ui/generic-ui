import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnAggregationConfig } from '../../../../../../composition/domain/column/column-aggregation.config';
import { AggregationType } from '../../../aggregation/aggregation.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class NumberField extends Field<number> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, aggregationConfig?: ColumnAggregationConfig);
    getField(): NumberField;
    assignDefaultAggregations(): AggregationType;
    assignPossibleAggregations(): AggregationType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(numOne: number, numTwo: number): number;
    filter(value: number, filterPhrase: number): boolean;
}
