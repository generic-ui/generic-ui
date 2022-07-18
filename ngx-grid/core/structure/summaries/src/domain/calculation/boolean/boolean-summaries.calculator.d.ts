import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/src/domain/field/data/data-type';
import { ItemEntity } from '../../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../../field/src/domain/field/field.entity';
export declare class BooleanSummariesCalculator extends SummariesCalculator<boolean, BooleanSummarizedValues> {
    private readonly truthy;
    private readonly falsy;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<ItemEntity>): void;
    aggregate(field: FieldEntity, value: boolean): void;
    generateAggregatedValues(field: FieldEntity): BooleanSummarizedValues;
}
