import { DataField } from '../data-field';
import { ColumnSummariesConfig } from '../../../../../../composition/api/column/column-summaries.config';
import { SummariesType } from '../../../../../summaries/domain/summaries.type';
import { FieldMatchers } from '../../../matcher/field.matchers';
import { OriginItemEntity } from '../../../../../source/domain/origin/origin-item-entity';
export declare class UnknownDataField extends DataField<any> {
    constructor(accessor: any, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    assignDefaultSummaries(): SummariesType;
    assignPossibleSummaries(): SummariesType;
    search(item: OriginItemEntity, searchPhrase: string): boolean;
    sort(one: any, two: any): number;
    filter(value: any, filterPhrase: any): boolean;
    equals(item: OriginItemEntity, value: any): boolean;
    getDisplayValue(item: any): string;
}
