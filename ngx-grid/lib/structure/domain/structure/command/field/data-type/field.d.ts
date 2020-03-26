import { FieldId } from './field.id';
import { DataType } from './data-type';
import { OriginItemEntity } from '../../../../source/command/origin/origin-item-entity';
import { AggregationType } from '../../aggregation/aggregation.type';
import { ColumnAggregationConfig } from '../../../../../../composition/domain/column-aggregation.config';
import { FieldMatchers } from '../matcher/field.matchers';
import { BaseField } from './base.field';
export declare abstract class Field<T> extends BaseField {
    private aggregationEnabled;
    private aggregations;
    private readonly possibleAggregations;
    protected constructor(id: FieldId, accessor: any, dataType: DataType, matchers: FieldMatchers, aggregationConfig?: ColumnAggregationConfig);
    abstract assignDefaultAggregations(): AggregationType;
    abstract assignPossibleAggregations(): AggregationType;
    abstract search(item: OriginItemEntity, searchPhrase: string): boolean;
    abstract sort(one: T, two: T): number;
    abstract filter(value: T, filterPhrase: T): boolean;
    isAggregation(type: AggregationType): boolean;
    isAggregationEnabled(): boolean;
    setAggregationEnabled(enabled: boolean): void;
    private assignAggregations;
}
