import { DataType } from './data-type';
import { FieldMatchers } from '../../matcher/field.matchers';
import { BaseDataField } from './base-data-field';
import { OriginItemEntity } from '../../../../../source/core/domain/origin/origin-item-entity';
import { SummariesType } from '../../../../../summaries/core/domain/summaries.type';
import { ColumnSummariesConfig } from '../../../../../../composition/core/api/column/column-summaries.config';
export declare abstract class DataField<T> extends BaseDataField {
    private summariesEnabled;
    private summariesTypes;
    private readonly possibleSummaries;
    protected constructor(accessor: any, dataType: DataType, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    abstract assignDefaultSummaries(): SummariesType;
    abstract assignPossibleSummaries(): SummariesType;
    abstract search(item: OriginItemEntity, searchPhrase: string): boolean;
    abstract sort(one: T, two: T): number;
    abstract filter(value: T, filterPhrase: T): boolean;
    abstract equals(item: OriginItemEntity, value: T): boolean;
    abstract getDisplayValue(item: T): string;
    isSummaries(type: SummariesType): boolean;
    isSummariesEnabled(): boolean;
    setSummariesEnabled(enabled: boolean): void;
    private assignSummaries;
}
