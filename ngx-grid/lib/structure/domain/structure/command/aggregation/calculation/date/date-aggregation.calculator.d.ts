import { AggregationCalculator } from '../aggregation.calculator';
import { DateAggregatedValues } from './date-aggregated.values';
import { DataType } from '../../../field/data-type/data-type';
import { Field } from '../../../field/data-type/field';
import { OriginItemEntity } from '../../../../../source/command/origin/origin-item-entity';
export declare class DateAggregationCalculator extends AggregationCalculator<Date, DateAggregatedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<Date>): void;
    postCalculate(field: Field<Date>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<Date>, value: Date): void;
    generateAggregatedValues(field: Field<Date>): DateAggregatedValues;
}
