import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { Field } from '../../../../../field/core/domain/field/field';
import * as i0 from "@angular/core";
export declare class UnknownSummariesCalculator extends SummariesCalculator<any, UnknownSummarizedValues> {
    constructor();
    forDataType(dataType: DataType): boolean;
    prepare(field: Field): void;
    postCalculate(field: Field, items: Array<OriginItemEntity>): void;
    aggregate(field: Field, value: any): void;
    generateAggregatedValues(field: Field): UnknownSummarizedValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<UnknownSummariesCalculator, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UnknownSummariesCalculator>;
}
//# sourceMappingURL=unknown-summaries.calculator.d.ts.map