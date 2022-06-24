import { Publisher } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './global/schema.read-model-root-id';
import { StructureId } from '../../structure/core/api/global/structure.id';
import { RowColoring } from './row-coloring/row-coloring';
export declare abstract class SchemaPublisher implements Publisher {
    protected constructor();
    abstract create(schemaId: SchemaReadModelRootId): void;
    abstract setTheme(theme: SchemaTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    abstract setRowColoring(rowColoring: RowColoring, schemaId: SchemaReadModelRootId): void;
    abstract setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    abstract setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
}
