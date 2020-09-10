import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
export declare class UnknownSummariesCalculator extends SummariesCalculator<any, UnknownSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: any): void;
    generateAggregatedValues(field: Field): UnknownSummarizedValues;
}
