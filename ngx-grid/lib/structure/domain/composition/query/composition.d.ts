import { ReadModel, AggregateId } from '@generic-ui/hermes';
import { ColumnDefinition } from './definition/column-definition';
import { CellTemplateWithContext } from './definition/cell-template-with-context';
import { CellTemplateWithAccessor } from './definition/cell-template-with-accessor';
export declare class Composition extends ReadModel {
    private readonly ready;
    private readonly columns;
    private readonly width;
    private readonly resizeWidth;
    constructor(uid: AggregateId, ready: boolean, columns: Array<ColumnDefinition>, width: number, resizeWidth: boolean);
    getColumns(): Array<ColumnDefinition>;
    getHeaderColumns(): Array<CellTemplateWithContext>;
    getTemplateColumns(): Array<CellTemplateWithAccessor>;
    getWidth(): number;
    getContainerWidth(): number;
    isReady(): boolean;
    isResizeWidthEnabled(): boolean;
    equals(composition: Composition): boolean;
    equalsByColumns(columns: Array<ColumnDefinition>): boolean;
}
