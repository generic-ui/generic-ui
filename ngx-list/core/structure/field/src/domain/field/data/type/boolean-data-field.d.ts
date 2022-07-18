import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/src/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { ItemEntity } from '../../../../../../source/src/domain/item/item.entity';
export declare class BooleanDataField extends DataField<boolean> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: ItemEntity, searchPhrase: string): boolean;
    sort(booleanOne: boolean, booleanTwo: boolean): number;
    filter(value: boolean, filterPhrase: boolean): boolean;
    equals(item: ItemEntity, value: boolean): boolean;
    getDisplayValue(item: boolean): string;
}
