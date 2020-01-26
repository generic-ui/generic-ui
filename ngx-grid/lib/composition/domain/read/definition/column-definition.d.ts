import { TemplateRef } from '@angular/core';
import { ColumnField } from '../../command/column/field/column-field';
import { SortStatus } from '../../command/column/sort/sort-status';
import { HeaderTemplate } from '../../column.config';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
import { ColumnId } from '../../command/column/column.id';
export declare class ColumnDefinition {
    cellTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    width: number;
    templateFunction: (i: any) => string;
    private readonly columnId;
    private field;
    private sortStatus;
    private header;
    private enabled;
    constructor(field: ColumnField, columnId: ColumnId, enabled: boolean, header: string | HeaderTemplate, sort?: SortStatus);
    isEnabled(): boolean;
    setHeader(header: string): void;
    setField(field: ColumnField): void;
    getHeaderCellTemplateWithContext(index: number): CellTemplateWithContext;
    getContentCellTemplateWithAccessor(): CellTemplateWithAccessor;
    getColumn(): any;
}
