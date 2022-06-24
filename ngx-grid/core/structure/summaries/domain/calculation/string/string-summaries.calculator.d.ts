import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../field/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../source/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../field/domain/field/field.entity';
export declare class StringSummariesCalculator extends SummariesCalculator<string, StringSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<OriginItemEntity>): void;
    aggregate(field: FieldEntity, value: string): void;
    generateAggregatedValues(field: FieldEntity): StringSummarizedValues;
}
