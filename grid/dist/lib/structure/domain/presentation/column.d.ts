import { ColumnType } from 'structure/domain/presentation/column-type';
export declare type ElementData = (element?: any, index?: number) => any;
export declare type CellTemplate = (element?: any, index?: number) => string;
export declare type HeaderTemplate = (index?: number) => string;
export interface Column {
    /**
     * Relates to column Header
     */
    header?: string | HeaderTemplate;
    /**
     * Template accessor
     */
    field?: string | ElementData;
    template?: string | CellTemplate;
    columnType?: string | ColumnType;
    width?: string | number;
}
