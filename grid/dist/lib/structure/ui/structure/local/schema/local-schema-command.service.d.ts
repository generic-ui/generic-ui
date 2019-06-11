import { RowColoring } from 'structure/domain/schema/row-coloring';
import { StructureId } from 'structure/domain/structure-id';
import { SchemaCommandService } from 'structure/app/schema/schema-command.service';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
import { SchemaDispatcher } from 'structure/domain/schema/command/schema.dispatcher';
export declare class LocalSchemaCommandService extends SchemaCommandService {
    private structureId;
    constructor(structureId: StructureId, schemaQueryService: SchemaQueryService, schemaDispatcher: SchemaDispatcher);
    setDefaultSchema(): void;
    setHeight(height: number): void;
    changeVerticalGrid(enabled: boolean): void;
    changeHorizontalGrid(enabled: boolean): void;
    toggleVerticalGrid(): void;
    toggleHorizontalGrid(): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(coloring: RowColoring, structureId?: StructureId): void;
    changeTopHeader(enabled: boolean, structureId?: StructureId): void;
    changeBottomHeader(enabled: boolean, structureId?: StructureId): void;
    toggleTopHeader(): void;
    toggleBottomHeader(): void;
}
