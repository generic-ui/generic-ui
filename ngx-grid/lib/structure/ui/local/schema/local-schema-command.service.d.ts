import { SchemaCommandService } from '../../../ui-api/schema/schema-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { SchemaDispatcher } from '../../../domain/schema/command/schema.dispatcher';
import { SchemaTheme } from '../../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../../domain/schema/schema-row-coloring';
export declare class LocalSchemaCommandService extends SchemaCommandService {
    private structureId;
    constructor(structureId: StructureId, schemaQueryService: SchemaReadModelService, schemaDispatcher: SchemaDispatcher);
    setDefaultSchema(): void;
    setSchema(height: number, structureId?: StructureId): void;
    setHeight(height: number): void;
    changeVerticalGrid(enabled: boolean): void;
    changeHorizontalGrid(enabled: boolean): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(coloring: SchemaRowColoring, structureId?: StructureId): void;
    changeTopHeader(enabled: boolean, structureId?: StructureId): void;
    changeBottomHeader(enabled: boolean, structureId?: StructureId): void;
    toggleVerticalGrid(): void;
    toggleHorizontalGrid(): void;
    toggleTopHeader(): void;
    toggleBottomHeader(): void;
}
