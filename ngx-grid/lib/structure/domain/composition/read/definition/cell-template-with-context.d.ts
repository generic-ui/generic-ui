import { TemplateRef } from '@angular/core';
import { CellContext } from './cell-context';
import { FieldId } from '../../../structure/command/field/data-type/field.id';
import { SortStatus } from '../../command/column/sort/sort-status';
import { ColumnId } from '../../command/column/column.id';
export declare class CellTemplateWithContext {
    viewTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    context: CellContext;
    width: number;
    private readonly fieldId;
    private readonly columnId;
    private readonly sortStatus;
    private readonly enabled;
    constructor(viewTemplate: TemplateRef<any>, editTemplate: TemplateRef<any>, context: CellContext, width: number, fieldId: FieldId, columnId: ColumnId, sortStatus: SortStatus, enabled: boolean);
    getColumnId(): ColumnId;
    getFieldId(): FieldId;
    getSortStatus(): SortStatus;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoSort(): boolean;
    isEnabled(): boolean;
}
