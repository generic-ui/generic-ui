import { DataField } from '../data-field';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
import { ColumnSummariesConfig } from '../../../../../../../composition/src/api/column/column-summaries.config';
import { ItemEntity } from '../../../../../../source/src/domain/item/item.entity';
export declare class StringDataField extends DataField<string> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: ItemEntity, searchPhrase: string): boolean;
    sort(strOne: string, strTwo: string): number;
    filter(value: string, filterPhrase: string): boolean;
    equals(item: ItemEntity, value: string): boolean;
    getDisplayValue(item: string): string;
}
