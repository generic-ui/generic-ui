import { FieldId } from './field.id';
import { DataType } from './data-type';
import { OriginItemEntity } from '../../../source/origin/origin-item-entity';
import { SummariesType } from '../../summaries/summaries.type';
import { ColumnSummariesConfig } from '../../../../../composition/domain/column/column-summaries.config';
import { FieldMatchers } from '../matcher/field.matchers';
import { BaseField } from './base.field';
export declare abstract class Field<T> extends BaseField {
    private summariesEnabled;
    private summariesTypes;
    private readonly possibleSummaries;
    protected constructor(id: FieldId, accessor: any, dataType: DataType, matchers: FieldMatchers, summariesConfig?: ColumnSummariesConfig);
    abstract assignDefaultSummaries(): SummariesType;
    abstract assignPossibleSummaries(): SummariesType;
    abstract search(item: OriginItemEntity, searchPhrase: string): boolean;
    abstract sort(one: T, two: T): number;
    abstract filter(value: T, filterPhrase: T): boolean;
    isSummaries(type: SummariesType): boolean;
    isSummariesEnabled(): boolean;
    setSummariesEnabled(enabled: boolean): void;
    private assignSummaries;
}
