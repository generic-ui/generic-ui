import { Field } from '../field';
import { FieldId } from '../field.id';
import { ColumnSummariesConfig } from '../../../../../lib/composition/domain/column/column-summaries.config';
import { SummariesType } from '../../../../../lib/structure/domain/structure/summaries/summaries.type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../lib/structure/domain/source/origin/origin-item-entity';
export declare class BooleanField extends Field<boolean> {
    constructor(id: FieldId, accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(booleanOne: boolean, booleanTwo: boolean): number;
    filter(value: boolean, filterPhrase: boolean): boolean;
}
