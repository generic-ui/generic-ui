import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
export declare class BooleanSummariesCalculator extends SummariesCalculator<boolean, BooleanSummarizedValues> {
    private readonly truthy;
    private readonly falsy;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: boolean): void;
    generateAggregatedValues(field: Field): BooleanSummarizedValues;
}
