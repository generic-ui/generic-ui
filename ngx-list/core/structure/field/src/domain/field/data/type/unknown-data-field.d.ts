import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/src/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { ItemEntity } from '../../../../../../source/src/domain/item/item.entity';
export declare class UnknownDataField extends DataField<any> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: ItemEntity, searchPhrase: string): boolean;
    sort(one: any, two: any): number;
    filter(value: any, filterPhrase: any): boolean;
    equals(item: ItemEntity, value: any): boolean;
    getDisplayValue(item: any): string;
}
