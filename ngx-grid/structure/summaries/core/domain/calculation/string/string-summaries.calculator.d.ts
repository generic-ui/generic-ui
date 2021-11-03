import { SummariesCalculator } from '../summaries.calculator';
import { StringSummarizedValues } from './string-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/core/domain/field/field';
import * as i0 from "@angular/core";
export declare class StringSummariesCalculator extends SummariesCalculator<string, StringSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: string): void;
    generateAggregatedValues(field: Field): StringSummarizedValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringSummariesCalculator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StringSummariesCalculator>;
}
//# sourceMappingURL=string-summaries.calculator.d.ts.map