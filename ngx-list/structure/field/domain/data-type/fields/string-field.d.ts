import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnSummariesConfig } from '../../../../../lib/composition/domain/column/column-summaries.config';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../lib/structure/domain/source/origin/origin-item-entity';
export declare class StringField extends Field<string> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(strOne: string, strTwo: string): number;
    filter(value: string, filterPhrase: string): boolean;
}
