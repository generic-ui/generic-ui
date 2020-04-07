import { AggregateRoot } from '@generic-ui/hermes';
import { SchemaId } from './schema.id';
import { SchemaTheme } from './schema-theme';
import { SchemaRowColoring } from './schema-row-coloring';
export declare class SchemaAggregate extends AggregateRoot<SchemaId> {
    static readonly DEFAULT_THEME = SchemaTheme.GENERIC;
    static readonly DEFAULT_ROW_COLORING = SchemaRowColoring.ODD;
    static readonly DEFAULT_VERTICAL_GRID = true;
    static readonly DEFAULT_HORIZONTAL_GRID = true;
    private horizontalGrid;
    private verticalGrid;
    private theme;
    private rowColoring;
    constructor(id: SchemaId);
    getRowColoring(): SchemaRowColoring;
    getTheme(): SchemaTheme;
    isVerticalGridEnabled(): boolean;
    isHorizontalGridEnabled(): boolean;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(coloring: SchemaRowColoring): void;
    setVerticalGrid(enabled: boolean): void;
    setHorizontalGrid(enabled: boolean): void;
}
