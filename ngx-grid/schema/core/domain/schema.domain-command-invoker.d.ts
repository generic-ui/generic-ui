import { SchemaDispatcher } from './schema.dispatcher';
import { StructureCommandInvoker } from '../../../structure/core/api/structure.command-invoker';
import { FabricModalThemeService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../api/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { StructureId } from '../../../structure/core/domain/structure.id';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
export declare class SchemaDomainCommandInvoker extends SchemaCommandInvoker {
    private readonly schemaDispatcher;
    private readonly structureCommandService;
    private readonly fabricModalThemeService;
    constructor(schemaDispatcher: SchemaDispatcher, structureCommandService: StructureCommandInvoker, fabricModalThemeService: FabricModalThemeService);
    create(schemaId?: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId?: SchemaReadModelRootId, structureId?: StructureId): void;
    setRowColoring(rowColoring: RowColoring, schemaId?: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    private toSchemaRowColoring;
    private toFabricTheme;
}
