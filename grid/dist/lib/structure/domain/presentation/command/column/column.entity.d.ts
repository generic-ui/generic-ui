import { ElementData, HeaderTemplate } from 'structure/domain/presentation/column';
import { ColumnType } from 'structure/domain/presentation/column-type';
export declare class ColumnEntity {
    header?: string | HeaderTemplate;
    field?: string | ElementData;
    columnType: string | ColumnType;
    width?: number;
    constructor(header?: string, field?: string, columnType?: string, width?: number);
}
