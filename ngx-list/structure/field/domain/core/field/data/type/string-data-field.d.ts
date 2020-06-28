import { DataField } from '../data-field';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { SummariesType } from '../../../../../../../lib/structure/domain/structure/summaries/summaries.type';
import { ColumnSummariesConfig } from '../../../../../../../lib/composition/domain/column/column-summaries.config';
import { OriginItemEntity } from '../../../../../../source/domain/origin/origin-item-entity';
export declare class StringDataField extends DataField<string> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(strOne: string, strTwo: string): number;
    filter(value: string, filterPhrase: string): boolean;
    equals(item: OriginItemEntity, value: string): boolean;
    getDisplayValue(item: string): string;
}
