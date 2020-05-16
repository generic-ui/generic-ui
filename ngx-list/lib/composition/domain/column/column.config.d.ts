import { DataType } from '../../../structure/domain/structure/field/data-type/data-type';
import { CellView } from './cell-view';
import { ColumnSummariesConfig } from './column-summaries.config';
import { ColumnSortingConfig } from '../sort/column-sorting.config';
import { ColumnCellEditingConfig } from './column-cell-editing.config';
import { ColumnAlign } from './column-align';
export declare type ElementData = (element?: any, index?: number) => any;
export declare type CellTemplate = (element?: any, index?: number) => string;
export declare type HeaderTemplate = (index?: number) => string;
export interface ColumnConfig {
    type?: DataType;
    /**
     * Relates to column Header
     */
    header?: string | HeaderTemplate;
    /**
     * Template accessor
     */
    field?: string | ElementData;
    view?: CellView | any;
    width?: string | number;
    enabled?: boolean;
    align?: ColumnAlign;
    summaries?: ColumnSummariesConfig;
    sorting?: ColumnSortingConfig;
    cellEditing?: ColumnCellEditingConfig;
    matcher?: (item: any) => any;
}
