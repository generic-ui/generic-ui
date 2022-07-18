import { DataType } from '../../domain/field/data/data-type';
import { ColumnSummariesConfig } from '../../../../../composition/src/api/column/column-summaries.config';
import { ColumnSortingConfig } from '../../../../../composition/src/api/sort/column-sorting.config';
export interface FieldConfig {
    field: string;
    type?: DataType;
    matcher?: (item?: any, index?: number) => any;
    summaries?: ColumnSummariesConfig;
    sorting?: ColumnSortingConfig;
}
