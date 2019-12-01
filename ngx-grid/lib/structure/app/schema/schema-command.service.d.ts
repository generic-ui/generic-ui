import { OnDestroy } from '@angular/core';
import { SchemaDispatcher } from '../../domain/schema/command/schema.dispatcher';
import { SchemaQueryService } from './schema-query.service';
import { StructureId } from '../../domain/structure-id';
import { SchemaTheme } from '../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
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
    setRowColoring(coloring: SchemaRowColoring, structureId?: StructureId): void;
    changeTopHeader(enabled: boolean, structureId?: StructureId): void;
    changeBottomHeader(enabled: boolean, structureId?: StructureId): void;
    toggleVerticalGrid(structureId?: StructureId): void;
    toggleHorizontalGrid(structureId?: StructureId): void;
    toggleTopHeader(structureId?: StructureId): void;
    toggleBottomHeader(structureId?: StructureId): void;
}
