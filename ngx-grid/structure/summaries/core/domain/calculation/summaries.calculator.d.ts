import { SummariesValues } from './summaries.values';
import { DataType } from '../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../field/core/domain/field/field.entity';
export declare abstract class SummariesCalculator<T, A extends SummariesValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: FieldEntity): void;
    abstract postCalculate(field: FieldEntity, items: Array<OriginItemEntity>): void;
    abstract aggregate(field: FieldEntity, value: T): void;
    abstract generateAggregatedValues(field: FieldEntity): A;
    calculate(fields: Array<FieldEntity>, items: Array<OriginItemEntity>): Map<string, A>;
}
