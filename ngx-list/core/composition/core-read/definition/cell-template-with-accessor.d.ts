import { TemplateRef } from '@angular/core';
import { ColumnFieldId } from '../../domain/column/field/column-field.id';
import { ItemEntity } from '../../../structure/source/domain/item/item.entity';
import { DataType } from '../../../structure/field/domain/field/data/data-type';
import { ViewEntity } from '../../domain/column/view.entity';
import { ColumnAlign } from '../../domain/column/column-align';
import { CellValue } from './cell-value';
import { ColumnDefinitionId } from '../../api/column/column-definition-id';
export declare class CellTemplateWithAccessor {
    columnDefinitionId: ColumnDefinitionId;
    private readonly name;
    template: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    editable: boolean;
    templateFun: (value: any, item: any) => any;
    formatterFun: (value: any, item: any) => any;
    accessor: (element: any) => any;
    searchAccessor: (element: any) => any;
    width: number;
    columnFieldId: ColumnFieldId;
    private readonly align;
    private readonly cellEditingEnabled;
    private readonly type;
    private readonly view;
    constructor(columnDefinitionId: ColumnDefinitionId, name: string, template: TemplateRef<any>, editTemplate: TemplateRef<any>, editable: boolean, templateFun: (value: any, item: any) => any, formatterFun: (value: any, item: any) => any, accessor: (element: any) => any, searchAccessor: (element: any) => any, width: number, columnFieldId: ColumnFieldId, align: ColumnAlign, cellEditingEnabled: boolean, type: DataType, // REFACTOR
    view: ViewEntity);
    isCellEditingEnabled(): boolean;
    isBooleanDataType(): boolean;
    isAlignLeft(): boolean;
    isAlignCenter(): boolean;
    isAlignRight(): boolean;
    getName(): string;
    getValue(entity: ItemEntity, searchPhrase?: string): CellValue;
    getClasses(): string;
    private findValue;
}
