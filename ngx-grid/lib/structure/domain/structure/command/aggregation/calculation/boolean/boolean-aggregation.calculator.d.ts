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
    prepare(field: Field<boolean>): void;
    postCalculate(field: Field<boolean>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<boolean>, value: boolean): void;
    generateAggregatedValues(field: Field<boolean>): BooleanAggregatedValues;
}
