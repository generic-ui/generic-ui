import { AggregationCalculator } from '../aggregation.calculator';
import { BooleanAggregatedValues } from './boolean-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { Field } from '../../../field/data-type/field';
import { OriginItemEntity } from '../../../../../source/command/origin/origin-item-entity';
export declare class BooleanAggregationCalculator extends AggregationCalculator<boolean, BooleanAggregatedValues> {
    private readonly truthy;
    private readonly falsy;
    constructor();
    forDataType(dataType: DataType): boolean;
    aggregate(field: Field, value: boolean): void;
    generateAggregatedValues(field: Field): BooleanAggregatedValues;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
}
