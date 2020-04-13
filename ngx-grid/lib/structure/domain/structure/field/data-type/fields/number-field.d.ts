import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnSummariesConfig } from '../../../../../../composition/domain/column/column-summaries.config';
import { SummariesType } from '../../../summaries/summaries.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../source/origin/origin-item-entity';
export declare class NumberField extends Field<number> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    getField(): NumberField;
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(numOne: number, numTwo: number): number;
    filter(value: number, filterPhrase: number): boolean;
}
