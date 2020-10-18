import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import { CellView } from '../../domain/column/cell-view';
import { ColumnSummariesConfig } from './column-summaries.config';
import { ColumnSortingConfig } from '../sort/column-sorting.config';
import { ColumnCellEditingConfig } from './column-cell-editing.config';
import { ColumnAlign } from '../../domain/column/column-align';
export declare type ElementData = (element?: any, index?: number) => any;
export declare type CellTemplate = (element?: any, index?: number) => string;
export declare type HeaderTemplate = (index?: number) => string;
export interface MultiColumnConfig {
    header?: string | HeaderTemplate;
    columns?: Array<ColumnConfig>;
}
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
    formatter?: (item: any, index: number) => any;
    matcher?: (item: any) => any;
}
