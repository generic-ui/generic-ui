import { AggregationCalculator } from '../aggregation.calculator';
import { StringAggregatedValues } from './string-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { Field } from '../../../field/data-type/field';
import { OriginItemEntity } from '../../../../../source/command/origin/origin-item-entity';
export declare class StringAggregationCalculator extends AggregationCalculator<string, StringAggregatedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: string): void;
    generateAggregatedValues(field: Field): StringAggregatedValues;
}
