import { SummariesValues } from './summaries.values';
import { DataType } from '../../field/data-type/data-type';
import { OriginItemEntity } from '../../../source/origin/origin-item-entity';
import { AllFieldTypes } from '../../field/data-type/all-field-types';
export declare abstract class SummariesCalculator<T, A extends SummariesValues> {
    abstract forDataType(dataType: DataType): boolean;
    abstract prepare(field: AllFieldTypes): void;
    abstract postCalculate(field: AllFieldTypes, items: Array<OriginItemEntity>): void;
    abstract aggregate(field: AllFieldTypes, value: T): void;
    abstract generateAggregatedValues(field: AllFieldTypes): A;
    calculate(fields: Array<AllFieldTypes>, items: Array<OriginItemEntity>): Map<string, A>;
}
