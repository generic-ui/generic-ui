import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/src/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { ItemEntity } from '../../../../../../source/src/domain/item/item.entity';
export declare class DateDataField extends DataField<Date> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: ItemEntity, searchPhrase: string): boolean;
    sort(dateOne: Date, dateTwo: Date): number;
    filter(value: Date, filterPhrase: Date): boolean;
    equals(item: ItemEntity, value: Date): boolean;
    getDisplayValue(item: Date): string;
}
