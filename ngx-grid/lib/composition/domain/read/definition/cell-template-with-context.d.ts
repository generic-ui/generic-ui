import { TemplateRef } from '@angular/core';
import { CellContext } from './cell-context';
import { FieldId } from '../../../../structure/domain/structure/command/field/data-type/field.id';
import { SortOrder } from '../../command/column/sort/sort-order';
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
    private readonly sortable;
    constructor(viewTemplate: TemplateRef<any>, editTemplate: TemplateRef<any>, context: CellContext, width: number, fieldId: FieldId, columnId: ColumnId, sortStatus: SortOrder, enabled: boolean, sortable: boolean);
    getColumnId(): ColumnId;
    getFieldId(): FieldId;
    getSortStatus(): SortOrder;
    isSortEnabled(): boolean;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoSort(): boolean;
    isEnabled(): boolean;
}
