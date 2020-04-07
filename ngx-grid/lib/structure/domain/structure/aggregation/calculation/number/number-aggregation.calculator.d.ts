import { AggregationCalculator } from '../aggregation.calculator';
import { NumberAggregatedValues } from './number-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { Field } from '../../../field/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class NumberAggregationCalculator extends AggregationCalculator<number, NumberAggregatedValues> {
    private readonly sum;
    private readonly min;
    private readonly max;
    private readonly average;
    private readonly median;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<number>): void;
    postCalculate(field: Field<number>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<number>, value: number): void;
    generateAggregatedValues(field: Field<number>): NumberAggregatedValues;
}
