import { DataType } from '../domain/core/field/data/data-type';
import { ColumnSummariesConfig } from '../../../composition/domain/column/column-summaries.config';
import { ColumnSortingConfig } from '../../../composition/domain/sort/column-sorting.config';
export interface FieldConfig {
    field: string;
    type?: DataType;
    matcher?: (item: any) => any;
    summaries?: ColumnSummariesConfig;
    sorting?: ColumnSortingConfig;
}
