import { SchemaTheme } from '../domain/schema-theme';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../read/schema.read-model-root-id';
import { SchemaRowColoring } from '../domain/schema-row-coloring';
import { StructureId } from '../../structure/domain/structure.id';
import { StructureCommandDispatcher } from '../../structure/ui-api/structure.command-dispatcher';
export declare class SchemaCommandDispatcher {
    private readonly schemaDispatcher;
    private readonly structureCommandService;
    constructor(schemaDispatcher: SchemaDispatcher, structureCommandService: StructureCommandDispatcher);
    create(schemaId?: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId?: SchemaReadModelRootId, structureId?: StructureId): void;
    setRowColoring(rowColoring: SchemaRowColoring, schemaId?: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
}
