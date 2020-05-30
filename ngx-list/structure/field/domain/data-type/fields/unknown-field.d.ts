import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnSummariesConfig } from '../../../../../lib/composition/domain/column/column-summaries.config';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../lib/structure/domain/source/origin/origin-item-entity';
export declare class UnknownField extends Field<any> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(one: any, two: any): number;
    filter(value: any, filterPhrase: any): boolean;
}
