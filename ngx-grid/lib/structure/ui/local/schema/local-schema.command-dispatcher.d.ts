import { SchemaDispatcher } from '../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../schema/domain/schema-theme';
import { SchemaCommandDispatcher } from '../../../../schema/ui-api/schema.command-dispatcher';
import { SchemaRowColoring } from '../../../../schema/domain/schema-row-coloring';
import { StructureCommandDispatcher } from '../../../ui-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
export declare class LocalSchemaCommandDispatcher extends SchemaCommandDispatcher {
    private readonly schemaReadModelRootId;
    private readonly structureId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, structureId: StructureId, structureCommandService: StructureCommandDispatcher, schemaDispatcher: SchemaDispatcher);
    create(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(rowColoring: SchemaRowColoring): void;
    setVerticalGrid(verticalGrid: boolean): void;
    setHorizontalGrid(horizontalGrid: boolean): void;
}
