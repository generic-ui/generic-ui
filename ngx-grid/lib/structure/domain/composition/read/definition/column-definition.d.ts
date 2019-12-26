import { TemplateRef } from '@angular/core';
import { ColumnField } from '../../command/column/field/column-field';
import { SortStatus } from '../../command/sort/sort-status';
import { HeaderTemplate } from '../../column.config';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
export declare class ColumnDefinition {
    cellTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    width: number;
    templateFunction: (i: any) => string;
    private field;
    private sortStatus;
    private header;
    constructor(field: ColumnField, header: string | HeaderTemplate, sort?: SortStatus);
    setHeader(header: string): void;
    setField(field: ColumnField): void;
    getHeaderCellTemplateWithContext(index: number): CellTemplateWithContext;
    getContentCellTemplateWithAccessor(): CellTemplateWithAccessor;
}
