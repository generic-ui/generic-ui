import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
export declare class NumberSummariesCalculator extends SummariesCalculator<number, NumberSummarizedValues> {
    private readonly sum;
    private readonly min;
    private readonly max;
    private readonly average;
    private readonly median;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: number): void;
    generateAggregatedValues(field: Field): NumberSummarizedValues;
}
