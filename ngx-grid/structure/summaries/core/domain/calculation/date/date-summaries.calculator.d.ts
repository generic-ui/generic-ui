import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/core/domain/field/field';
import * as i0 from "@angular/core";
export declare class DateSummariesCalculator extends SummariesCalculator<Date, DateSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: Date): void;
    generateAggregatedValues(field: Field): DateSummarizedValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateSummariesCalculator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateSummariesCalculator>;
}
//# sourceMappingURL=date-summaries.calculator.d.ts.map