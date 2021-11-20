import { TemplateRef } from '@angular/core';
import { ReadModelEntity } from '@generic-ui/hermes';
import { ColumnField } from '../../domain/column/field/column-field';
import { SortOrder } from '../../domain/column/sort/sort-order';
import { HeaderTemplate } from '../../api/column/column.config';
import { CellTemplateWithContext } from './cell-template-with-context';
import { CellTemplateWithAccessor } from './cell-template-with-accessor';
import { DataType } from '../../../../structure/field/core/domain/field/data/data-type';
import { ViewEntity } from '../../domain/column/view.entity';
import { ColumnAlign } from '../../domain/column/column-align';
import { ColumnDefinitionId } from '../../api/column/column-definition-id';
export declare class ColumnDefinition extends ReadModelEntity<ColumnDefinitionId> {
    private readonly name;
    private readonly type;
    private readonly view;
    private readonly align;
    cellTemplate: TemplateRef<any>;
    headerTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;
    width: number;
    private templateFunction;
    private formatterFunction;
    private readonly columnDefinitionId;
    private field;
    private sortStatus;
    private sortable;
    private header;
    private enabled;
    private cellEditingEnabled;
    constructor(field: ColumnField, columnDefinitionId: ColumnDefinitionId, // REFACTOR Id first argument
    name: string, enabled: boolean, type: DataType, // REFACTOR
    view: ViewEntity, // REFACTOR
    align: ColumnAlign, // REFACTOR
    header: string | HeaderTemplate, cellEditingEnabled: boolean, sort?: SortOrder, sortable?: boolean);
    getName(): string;
    isEnabled(): boolean;
    setHeader(header: string): void;
    setField(field: ColumnField): void;
    setTemplateFunction(templateFun: (i: any, item: any) => string): void;
    setFormatterFunction(formatter: (i: any, item: any) => string): void;
    toHeaderCellTemplateWithContext(index: number): CellTemplateWithContext;
    toContentCellTemplateWithAccessor(): CellTemplateWithAccessor;
}
