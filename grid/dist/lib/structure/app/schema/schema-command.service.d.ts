import { OnDestroy } from '@angular/core';
import { RowColoring } from 'structure/domain/schema/row-coloring';
import { StructureId } from 'structure/domain/structure-id';
import { SchemaDispatcher } from 'structure/domain/schema/command/schema.dispatcher';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
export declare class SchemaCommandService implements OnDestroy {
    private schemaDispatcher;
    private schemaQueryService;
    private unsubscribe$;
    constructor(schemaDispatcher: SchemaDispatcher, schemaQueryService: SchemaQueryService);
    ngOnDestroy(): void;
    setSchema(height: number, structureId?: StructureId): void;
    setHeight(height: number, structureId?: StructureId): void;
    changeVerticalGrid(enabled: boolean, structureId?: StructureId): void;
    changeHorizontalGrid(enabled: boolean, structureId?: StructureId): void;
    setTheme(theme: SchemaTheme, structureId?: StructureId): void;
    setRowColoring(coloring: RowColoring, structureId?: StructureId): void;
    changeTopHeader(enabled: boolean, structureId?: StructureId): void;
    changeBottomHeader(enabled: boolean, structureId?: StructureId): void;
    toggleVerticalGrid(structureId?: StructureId): void;
    toggleHorizontalGrid(structureId?: StructureId): void;
    toggleTopHeader(structureId?: StructureId): void;
    toggleBottomHeader(structureId?: StructureId): void;
}
