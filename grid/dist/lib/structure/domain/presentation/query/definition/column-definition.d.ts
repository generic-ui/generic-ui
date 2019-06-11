import { TemplateRef } from '@angular/core';
import { CellTemplateWithContext } from 'structure/domain/presentation/query/templates/cell-template-with-context';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
export declare class ColumnDefinition {
    headerTemplate: TemplateRef<any>;
    cellTemplate: TemplateRef<any>;
    width: number;
    private header;
    private field;
    setHeader(header: string): void;
    setField(field: string): void;
    getHeaderCellTemplateWithContext(index: number): CellTemplateWithContext;
    getContentCellTemplateWithAccessor(): CellTemplateWithAccessor;
}
