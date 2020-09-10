import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../field/domain/core/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/domain/core/field/field';
export declare class DateSummariesCalculator extends SummariesCalculator<Date, DateSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: Date): void;
    generateAggregatedValues(field: Field): DateSummarizedValues;
}
