import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { Field } from '../../../../../../../structure/field/domain/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class DateSummariesCalculator extends SummariesCalculator<Date, DateSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<Date>): void;
    postCalculate(field: Field<Date>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<Date>, value: Date): void;
    generateAggregatedValues(field: Field<Date>): DateSummarizedValues;
}
