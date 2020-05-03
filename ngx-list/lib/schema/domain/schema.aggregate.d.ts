import { Type } from '@angular/core';
import { AggregateEvent, AggregateRoot } from '@generic-ui/hermes';
import { SchemaId } from './schema.id';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaRowColoring } from './coloring/schema-row-coloring';
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
    createEvent(): Type<AggregateEvent<SchemaId>>;
    changeTheme(theme: SchemaTheme): void;
    private setTheme;
    setRowColoring(coloring: SchemaRowColoring): void;
    setVerticalGrid(enabled: boolean): void;
    setHorizontalGrid(enabled: boolean): void;
}
