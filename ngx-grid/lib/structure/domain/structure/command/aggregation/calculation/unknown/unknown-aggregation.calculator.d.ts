import { AggregationCalculator } from '../aggregation.calculator';
import { UnknownAggregatedValues } from './unknown-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { Field } from '../../../field/data-type/field';
import { OriginItemEntity } from '../../../../../source/command/origin/origin-item-entity';
export declare class UnknownAggregationCalculator extends AggregationCalculator<any, UnknownAggregatedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<any>): void;
    postCalculate(field: Field<any>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<any>, value: any): void;
    generateAggregatedValues(field: Field<any>): UnknownAggregatedValues;
}
