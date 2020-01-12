import { TemplateRef } from '@angular/core';
import { CellContext } from './cell-context';
import { FieldId } from '../../../structure/command/field/data-type/field.id';
import { SortStatus } from '../../command/sort/sort-status';
export declare class CellTemplateWithContext {
    viewTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    context: CellContext;
    width: number;
    private readonly fieldId;
    private readonly sortStatus;
    constructor(viewTemplate: TemplateRef<any>, editTemplate: TemplateRef<any>, context: CellContext, width: number, fieldId: FieldId, sortStatus: SortStatus);
    getFieldId(): FieldId;
    getSortStatus(): SortStatus;
    isAscSort(): boolean;
    isDescSort(): boolean;
    isNoSort(): boolean;
}
