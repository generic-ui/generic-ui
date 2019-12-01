import { TemplateRef } from '@angular/core';
import { ColumnFieldId } from '../../command/column/field/column-field.id';
export declare class CellTemplateWithAccessor {
    template: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    editable: boolean;
    accessor: (element: any) => any;
    width: number;
    columnFieldId: ColumnFieldId;
    constructor(template: TemplateRef<any>, editTemplate: TemplateRef<any>, editable: boolean, accessor: (element: any) => any, width: number, columnFieldId: ColumnFieldId);
}
