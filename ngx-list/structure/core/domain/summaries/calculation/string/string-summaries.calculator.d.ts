import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
export declare class StringSummariesCalculator extends SummariesCalculator<string, StringSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: string): void;
    generateAggregatedValues(field: Field): StringSummarizedValues;
}
