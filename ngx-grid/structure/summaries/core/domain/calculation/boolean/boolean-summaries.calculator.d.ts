import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { FieldEntity } from '../../../../../field/core/domain/field/field.entity';
export declare class BooleanSummariesCalculator extends SummariesCalculator<boolean, BooleanSummarizedValues> {
    private readonly truthy;
    private readonly falsy;
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: FieldEntity): void;
    postCalculate(field: FieldEntity, items: Array<OriginItemEntity>): void;
    aggregate(field: FieldEntity, value: boolean): void;
    generateAggregatedValues(field: FieldEntity): BooleanSummarizedValues;
}
