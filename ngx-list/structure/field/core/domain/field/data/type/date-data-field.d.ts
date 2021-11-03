import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../../composition/core/api/column/column-summaries.config';
import { SummariesType } from '../../../../../../summaries/core/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../../source/core/domain/origin/origin-item-entity';
export declare class DateDataField extends DataField<Date> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(dateOne: Date, dateTwo: Date): number;
    filter(value: Date, filterPhrase: Date): boolean;
    equals(item: OriginItemEntity, value: Date): boolean;
    getDisplayValue(item: Date): string;
}
