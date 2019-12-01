import { AggregatedValues } from './aggregated.values';
import { DataType } from '../../field/data-type/data-type';
import { Field } from '../../field/data-type/field';
import { OriginItemEntity } from '../../../../source/command/origin/origin-item-entity';
export declare abstract class AggregationCalculator<T, A extends AggregatedValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: Field): void;
    abstract postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    abstract aggregate(field: Field, value: T): void;
    abstract generateAggregatedValues(field: Field): A;
    calculate(fields: Array<Field>, items: Array<OriginItemEntity>): Map<string, A>;
}
