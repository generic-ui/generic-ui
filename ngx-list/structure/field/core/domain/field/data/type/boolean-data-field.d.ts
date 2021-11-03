import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/core/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../../source/core/domain/origin/origin-item-entity';
export declare class BooleanDataField extends DataField<boolean> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(booleanOne: boolean, booleanTwo: boolean): number;
    filter(value: boolean, filterPhrase: boolean): boolean;
    equals(item: OriginItemEntity, value: boolean): boolean;
    getDisplayValue(item: boolean): string;
}
//# sourceMappingURL=boolean-data-field.d.ts.map