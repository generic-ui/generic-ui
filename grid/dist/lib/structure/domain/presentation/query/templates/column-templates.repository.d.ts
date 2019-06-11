import { TemplateRef } from '@angular/core';
import { ColumnTemplateFactory } from 'structure/domain/presentation/query/templates/column-template.factory';
import { ColumnType } from 'structure/domain/presentation/column-type';
export declare class ColumnTemplatesRepository {
    private columnTemplateFactory;
    constructor(columnTemplateFactory: ColumnTemplateFactory);
    findTemplate(columnType: ColumnType): TemplateRef<any>;
}
