import { SchemaDispatcher } from '../../../../../schema/core/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/core/api/schema.command-invoker';
import { StructureCommandDispatcher } from '../../../../core/api/structure.command-dispatcher';
import { StructureId } from '../../../../core/api/structure.id';
import { RowColoring } from '../../../../../schema/core/api/row-coloring';
import { FabricModalThemeService } from '@generic-ui/fabric';
export declare class LocalSchemaCommandDispatcher extends SchemaCommandInvoker {
    private readonly schemaReadModelRootId;
    private readonly structureId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, structureId: StructureId, structureCommandService: StructureCommandDispatcher, schemaDispatcher: SchemaDispatcher, fabricModalThemeService: FabricModalThemeService);
    create(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(rowColoring: RowColoring): void;
    setVerticalGrid(verticalGrid: boolean): void;
    setHorizontalGrid(horizontalGrid: boolean): void;
}
