import { DataField } from '../data-field';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { SummariesType } from '../../../../../summaries/domain/summaries.type';
import { ColumnSummariesConfig } from '../../../../../../composition/api/column/column-summaries.config';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
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
