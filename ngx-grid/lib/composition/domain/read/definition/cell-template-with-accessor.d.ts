import { TemplateRef } from '@angular/core';
import { ColumnFieldId } from '../../command/column/field/column-field.id';
import { ItemEntity } from '../../../../structure/domain/source/item.entity';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { ViewEntity } from '../../command/column/view.entity';
import { ColumnAlign } from '../../column-align';
export declare class CellTemplateWithAccessor {
    template: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    editable: boolean;
    templateFun: (i: any) => any;
    accessor: (element: any) => any;
    searchAccessor: (element: any) => any;
    width: number;
    columnFieldId: ColumnFieldId;
    private readonly align;
    private readonly cellEditingEnabled;
    private readonly type;
    private readonly view;
    constructor(template: TemplateRef<any>, editTemplate: TemplateRef<any>, editable: boolean, templateFun: (i: any) => any, accessor: (element: any) => any, searchAccessor: (element: any) => any, width: number, columnFieldId: ColumnFieldId, align: ColumnAlign, cellEditingEnabled: boolean, type: DataType, // REFACTOR
    view: ViewEntity);
    isCellEditingEnabled(): boolean;
    isBooleanDataType(): boolean;
    isAlignLeft(): boolean;
    isAlignCenter(): boolean;
    isAlignRight(): boolean;
    getValue(entity: ItemEntity, searchPhrase?: string): any | HTMLElement;
    private findValue;
}
