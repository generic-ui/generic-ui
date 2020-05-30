import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { Field } from '../../../../../../../structure/field/domain/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class StringSummariesCalculator extends SummariesCalculator<string, StringSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<string>): void;
    postCalculate(field: Field<string>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<string>, value: string): void;
    generateAggregatedValues(field: Field<string>): StringSummarizedValues;
}
