import { CommandDispatcher } from '@generic-ui/hermes';
import { SchemaTheme } from '../api/theme/schema-theme';
import { SchemaId } from './schema.id';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import * as i0 from "@angular/core";
export declare class SchemaDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    create(schemaId: SchemaId): void;
    setTheme(theme: SchemaTheme, schemaId: SchemaId): void;
    setRowColoring(rowColoring: SchemaRowColoring, schemaId: SchemaId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId: SchemaId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaDispatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaDispatcher>;
}
//# sourceMappingURL=schema.dispatcher.d.ts.map