import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/src/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { ItemEntity } from '../../../../../../source/src/domain/item/item.entity';
export declare class NumberDataField extends DataField<number> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    getField(): NumberDataField;
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: ItemEntity, searchPhrase: string): boolean;
    sort(numOne: number, numTwo: number): number;
    filter(value: number, filterPhrase: number): boolean;
    equals(item: ItemEntity, value: number): boolean;
    getDisplayValue(item: number): string;
}
