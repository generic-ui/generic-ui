import { DataType } from '../../../../structure/field/src/domain/field/data/data-type';
import { CellView } from '../../domain/column/cell-view';
import { ColumnSummariesConfig } from './column-summaries.config';
import { ColumnSortingConfig } from '../sort/column-sorting.config';
import { ColumnCellEditingConfig } from './column-cell-editing.config';
import { ColumnAlign } from '../../domain/column/column-align';
export type ElementData = (element?: any, index?: number) => any;
export type CellTemplate = (element?: any, index?: number) => string;
export type HeaderTemplate = (index?: number) => string;
export interface MultiColumnConfig {
    header?: string | HeaderTemplate;
    columns?: Array<ColumnConfig>;
}
export interface ColumnConfig {
    name?: string;
    /**
     * Template accessor
     */
    field?: string | ElementData;
    type?: DataType;
    view?: CellView | any;
    /**
     * Relates to column Header
     */
    header?: string | HeaderTemplate;
    width?: string | number;
    enabled?: boolean;
    align?: ColumnAlign;
    summaries?: ColumnSummariesConfig;
    sorting?: ColumnSortingConfig;
    cellEditing?: ColumnCellEditingConfig;
    formatter?: (item: any, index: number) => any;
    matcher?: (item: any, index: number) => any;
    templateRef?: any;
    cssClasses?: string;
    styles?: string;
}
