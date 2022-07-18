import { Publisher } from '@generic-ui/hermes';
import { SchemaTheme } from './theme/schema-theme';
import { SchemaReadModelRootId } from './global/schema.read-model-root-id';
import { StructureId } from '../../../structure/structure-core/src/api/global/structure.id';
import { RowColoring } from './row-coloring/row-coloring';
import { SchemaRowClass } from './styling/schema.row-class';
import { SchemaRowStyle } from './styling/schema.row-style';
export declare abstract class SchemaPublisher implements Publisher {
    protected constructor();
    abstract create(schemaId: SchemaReadModelRootId): void;
    abstract setTheme(theme: SchemaTheme, schemaId: SchemaReadModelRootId, structureId: StructureId): void;
    abstract setRowColoring(rowColoring: RowColoring, schemaId: SchemaReadModelRootId): void;
    abstract setVerticalGrid(verticalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    abstract setHorizontalGrid(horizontalGrid: boolean, schemaId: SchemaReadModelRootId): void;
    abstract setRowClass(schemaRowClass: SchemaRowClass, schemaId: SchemaReadModelRootId): void;
    abstract setRowStyle(rowStyle: SchemaRowStyle, schemaId: SchemaReadModelRootId): void;
}
