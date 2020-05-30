import { DataType } from '../domain/data-type/data-type';
import { ColumnSummariesConfig } from '../../../lib/composition/domain/column/column-summaries.config';
import { ColumnSortingConfig } from '../../../lib/composition/domain/sort/column-sorting.config';
export interface FieldConfig {
    field?: string;
    type?: DataType;
    matcher?: (item: any) => any;
    summaries?: ColumnSummariesConfig;
    sorting?: ColumnSortingConfig;
}
