import { SchemaDispatcher } from '../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../schema/feature-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../schema/feature-api/schema.command-dispatcher';
import { StructureCommandDispatcher } from '../../../feature-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { RowColoring } from '../../../../schema/feature-api/row-coloring';
export declare class LocalSchemaCommandDispatcher extends SchemaCommandDispatcher {
    private readonly schemaReadModelRootId;
    private readonly structureId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, structureId: StructureId, structureCommandService: StructureCommandDispatcher, schemaDispatcher: SchemaDispatcher);
    create(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(rowColoring: RowColoring): void;
    setVerticalGrid(verticalGrid: boolean): void;
    setHorizontalGrid(horizontalGrid: boolean): void;
}
