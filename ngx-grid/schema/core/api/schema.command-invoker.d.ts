import { CommandInvoker } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './schema.read-model-root-id';
import { StructureId } from '../../../structure/core/api/structure.id';
import { RowColoring } from './row-coloring/row-coloring';
import * as i0 from "@angular/core";
export declare abstract class SchemaCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract create(schemaId: SchemaReadModelRootId): void;
    abstract setTheme(theme: SchemaTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    abstract setRowColoring(rowColoring: RowColoring, schemaId: SchemaReadModelRootId): void;
    abstract setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    abstract setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchemaCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchemaCommandInvoker>;
}
//# sourceMappingURL=schema.command-invoker.d.ts.map