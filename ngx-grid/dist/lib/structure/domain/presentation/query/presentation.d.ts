import { ColumnDefinition } from 'structure/domain/presentation/query/definition/column-definition';
import { CellTemplateWithContext } from 'structure/domain/presentation/query/templates/cell-template-with-context';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
export declare class Presentation {
    private readonly columns;
    private readonly width;
    private readonly resizeWidth;
    constructor(columns: Array<ColumnDefinition>, width: number, resizeWidth: boolean);
    getColumns(): Array<ColumnDefinition>;
    getHeaderColumns(): Array<CellTemplateWithContext>;
    getTemplateColumns(): Array<CellTemplateWithAccessor>;
    getWidth(): number;
    isResizeWidthEnabled(): boolean;
}
