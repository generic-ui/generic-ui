import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { Field } from '../../../../../../../structure/field/domain/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class UnknownSummariesCalculator extends SummariesCalculator<any, UnknownSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<any>): void;
    postCalculate(field: Field<any>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<any>, value: any): void;
    generateAggregatedValues(field: Field<any>): UnknownSummarizedValues;
}
