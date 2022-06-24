import { SchemaDispatcher } from './schema.dispatcher';
import { StructurePublisher } from '../../structure/core/api/structure.publisher';
import { FabricModalThemeService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../api/global/schema.read-model-root-id';
import { SchemaTheme } from '../api/theme/schema-theme';
import { StructureId } from '../../structure/core/api/global/structure.id';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaPublisher } from '../api/schema.publisher';
export declare class SchemaDomainPublisher extends SchemaPublisher {
    private readonly schemaDispatcher;
    private readonly structureCommandService;
    private readonly fabricModalThemeService;
    constructor(schemaDispatcher: SchemaDispatcher, structureCommandService: StructurePublisher, fabricModalThemeService: FabricModalThemeService);
    static readonly services: readonly [typeof SchemaDispatcher, typeof StructurePublisher, typeof FabricModalThemeService];
    create(schemaId: SchemaReadModelRootId): void;
    setTheme(theme: SchemaTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    setRowColoring(rowColoring: RowColoring, schemaId: SchemaReadModelRootId): void;
    setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    private toSchemaRowColoring;
    private toFabricTheme;
}
