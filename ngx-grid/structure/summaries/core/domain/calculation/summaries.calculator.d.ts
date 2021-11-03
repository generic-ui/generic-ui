import { SummariesValues } from './summaries.values';
import { DataType } from '../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../field/core/domain/field/field';
export declare abstract class SummariesCalculator<T, A extends SummariesValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: Field): void;
    abstract postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    abstract aggregate(field: Field, value: T): void;
    abstract generateAggregatedValues(field: Field): A;
    calculate(fields: Array<Field>, items: Array<OriginItemEntity>): Map<string, A>;
}
//# sourceMappingURL=summaries.calculator.d.ts.map