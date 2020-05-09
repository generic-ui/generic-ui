import { CommandDispatcher } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaId } from './schema.id';
import { SchemaRowColoring } from './coloring/schema-row-coloring';
export declare class SchemaDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    create(schemaId: SchemaId): void;
    setTheme(theme: SchemaTheme, schemaId: SchemaId): void;
    setRowColoring(rowColoring: SchemaRowColoring, schemaId: SchemaId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId: SchemaId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaId): void;
}
