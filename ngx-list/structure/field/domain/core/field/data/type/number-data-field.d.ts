import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/domain/column/column-summaries.config';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../../source/domain/origin/origin-item-entity';
export declare class NumberDataField extends DataField<number> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    getField(): NumberDataField;
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(numOne: number, numTwo: number): number;
    filter(value: number, filterPhrase: number): boolean;
    equals(item: OriginItemEntity, value: number): boolean;
    getDisplayValue(item: number): string;
}
