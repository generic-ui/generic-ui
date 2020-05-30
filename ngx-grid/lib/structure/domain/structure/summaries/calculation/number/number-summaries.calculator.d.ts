import { SummariesCalculator } from '../summaries.calculator';
import { NumberSummarizedValues } from './number-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { Field } from '../../../../../../../structure/field/domain/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class NumberSummariesCalculator extends SummariesCalculator<number, NumberSummarizedValues> {
    private readonly sum;
    private readonly min;
    private readonly max;
    private readonly average;
    private readonly median;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<number>): void;
    postCalculate(field: Field<number>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<number>, value: number): void;
    generateAggregatedValues(field: Field<number>): NumberSummarizedValues;
}
