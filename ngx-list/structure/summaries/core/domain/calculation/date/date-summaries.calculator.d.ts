import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../../field/core/domain/field/field.entity';
export declare class DateSummariesCalculator extends SummariesCalculator<Date, DateSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<OriginItemEntity>): void;
    aggregate(field: FieldEntity, value: Date): void;
    generateAggregatedValues(field: FieldEntity): DateSummarizedValues;
}
