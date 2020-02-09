import { AggregateId, ReadModel } from '@generic-ui/hermes';
import { ColumnDefinition } from './definition/column-definition';
import { CellTemplateWithContext } from './definition/cell-template-with-context';
import { CellTemplateWithAccessor } from './definition/cell-template-with-accessor';
export declare class Composition extends ReadModel {
    private readonly ready;
    private readonly allColumns;
    private readonly activeColumns;
    private readonly width;
    private readonly resizeWidth;
    constructor(uid: AggregateId, ready: boolean, allColumns: Array<ColumnDefinition>, activeColumns: Array<ColumnDefinition>, width: number, resizeWidth: boolean);
    getActiveColumns(): Array<ColumnDefinition>;
    getAllColumns(): Array<ColumnDefinition>;
    getActiveHeaderColumns(): Array<CellTemplateWithContext>;
    getHeaderColumns(): Array<CellTemplateWithContext>;
    getTemplateColumns(): Array<CellTemplateWithAccessor>;
    getWidth(): number;
    getContainerWidth(): number;
    isReady(): boolean;
    isResizeWidthEnabled(): boolean;
    equals(composition: Composition): boolean;
    equalsByColumns(columns: Array<ColumnDefinition>): boolean;
}
