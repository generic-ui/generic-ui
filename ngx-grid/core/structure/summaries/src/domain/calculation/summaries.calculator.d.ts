import { SummariesValues } from './summaries.values';
import { DataType } from '../../../../field/src/domain/field/data/data-type';
import { ItemEntity } from '../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../field/src/domain/field/field.entity';
export declare abstract class SummariesCalculator<T, A extends SummariesValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: FieldEntity): void;
    abstract postCalculate(field: FieldEntity, items: Array<ItemEntity>): void;
    abstract aggregate(field: FieldEntity, value: T): void;
    abstract generateAggregatedValues(field: FieldEntity): A;
    calculate(fields: Array<FieldEntity>, items: Array<ItemEntity>): Map<string, A>;
}
