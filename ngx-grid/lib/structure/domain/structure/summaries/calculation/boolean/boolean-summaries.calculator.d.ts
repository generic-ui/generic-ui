import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { Field } from '../../../../../../../structure/field/domain/data-type/field';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class BooleanSummariesCalculator extends SummariesCalculator<boolean, BooleanSummarizedValues> {
    private readonly truthy;
    private readonly falsy;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field<boolean>): void;
    postCalculate(field: Field<boolean>, items: Array<OriginItemEntity>): void;
    aggregate(field: Field<boolean>, value: boolean): void;
    generateAggregatedValues(field: Field<boolean>): BooleanSummarizedValues;
}
