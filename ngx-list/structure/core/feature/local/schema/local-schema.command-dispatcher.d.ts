import { SchemaDispatcher } from '../../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/domain-api/schema.command-invoker';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { RowColoring } from '../../../../../schema/domain-api/row-coloring';
export declare class LocalSchemaCommandDispatcher extends SchemaCommandInvoker {
    private readonly schemaReadModelRootId;
    private readonly structureId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, structureId: StructureId, structureCommandService: StructureCommandDispatcher, schemaDispatcher: SchemaDispatcher);
    create(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(rowColoring: RowColoring): void;
    setVerticalGrid(verticalGrid: boolean): void;
    setHorizontalGrid(horizontalGrid: boolean): void;
}
