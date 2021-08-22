import { SchemaDispatcher } from '../../../../../schema/core/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { StructureCommandInvoker } from '../../../../core/api/structure.command-invoker';
import { SchemaDomainCommandInvoker } from '../../../../../schema/core/domain/schema.domain-command-invoker';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowColoring } from '../../../../../schema/core/api/row-coloring/row-coloring';
import { FabricModalThemeService } from '@generic-ui/fabric';
export declare class LocalSchemaCommandDispatcher extends SchemaDomainCommandInvoker {
    private readonly schemaReadModelRootId;
    private readonly structureId;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, structureId: StructureId, structureCommandService: StructureCommandInvoker, schemaDispatcher: SchemaDispatcher, fabricModalThemeService: FabricModalThemeService);
    create(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(rowColoring: RowColoring): void;
    setVerticalGrid(verticalGrid: boolean): void;
    setHorizontalGrid(horizontalGrid: boolean): void;
}
