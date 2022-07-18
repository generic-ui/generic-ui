import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../field/src/domain/field/data/data-type';
import { ItemEntity } from '../../../../../source/src/domain/item/item.entity';
import { FieldEntity } from '../../../../../field/src/domain/field/field.entity';
export declare class NumberSummariesCalculator extends SummariesCalculator<number, NumberSummarizedValues> {
    private readonly sum;
    private readonly min;
    private readonly max;
    private readonly average;
    private readonly median;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<ItemEntity>): void;
    aggregate(field: FieldEntity, value: number): void;
    generateAggregatedValues(field: FieldEntity): NumberSummarizedValues;
}
