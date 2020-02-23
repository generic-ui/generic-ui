import { TemplateRef } from '@angular/core';
import { ColumnFieldId } from '../../command/column/field/column-field.id';
import { ItemEntity } from '../../../../structure/domain/source/item.entity';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { ViewEntity } from '../../command/column/view.entity';
export declare class CellTemplateWithAccessor {
    template: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    editable: boolean;
    accessor: (element: any) => any;
    width: number;
    columnFieldId: ColumnFieldId;
    private readonly type;
    private readonly view;
    constructor(template: TemplateRef<any>, editTemplate: TemplateRef<any>, editable: boolean, accessor: (element: any) => any, width: number, columnFieldId: ColumnFieldId, type: DataType, // REFACTOR
    view: ViewEntity);
    getValue(entity: ItemEntity, searchPhrase?: string): any | HTMLElement;
}
