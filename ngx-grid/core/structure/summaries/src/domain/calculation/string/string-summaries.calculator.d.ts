import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../field/src/domain/field/data/data-type';
import { ItemEntity } from '../../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../../field/src/domain/field/field.entity';
export declare class StringSummariesCalculator extends SummariesCalculator<string, StringSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<ItemEntity>): void;
    aggregate(field: FieldEntity, value: string): void;
    generateAggregatedValues(field: FieldEntity): StringSummarizedValues;
}
