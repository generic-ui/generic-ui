import { SummariesValues } from './summaries.values';
import { DataType } from '../../../../../../structure/field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../../structure/source/domain/origin/origin-item-entity';
import { Field } from '../../../../../../structure/field/domain/core/field/field';
export declare abstract class SummariesCalculator<T, A extends SummariesValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: Field): void;
    abstract postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    abstract aggregate(field: Field, value: T): void;
    abstract generateAggregatedValues(field: Field): A;
    calculate(fields: Array<Field>, items: Array<OriginItemEntity>): Map<string, A>;
}
