import { SchemaTheme } from '../domain/theme/schema-theme';
import { SchemaDispatcher } from '../domain/schema.dispatcher';
import { SchemaReadModelRootId } from './read/schema.read-model-root-id';
import { StructureId } from '../../lib/structure/domain/structure.id';
import { StructureCommandDispatcher } from '../../lib/structure/feature-api/structure.command-dispatcher';
import { RowColoring } from './row-coloring';
export declare class SchemaCommandDispatcher {
    private readonly schemaDispatcher;
    private readonly structureCommandService;
    constructor(schemaDispatcher: SchemaDispatcher, structureCommandService: StructureCommandDispatcher);
    create(schemaId?: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId?: SchemaReadModelRootId, structureId?: StructureId): void;
    setRowColoring(rowColoring: RowColoring, schemaId?: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId?: SchemaReadModelRootId): void;
    private toSchemaRowColoring;
}
