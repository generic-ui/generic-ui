import { RowColoring } from 'structure/domain/schema/row-coloring';
import { StructureId } from 'structure/domain/structure-id';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class SchemaDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSchema(structureId: StructureId, height: number): void;
    changeVerticalGrid(structureId: StructureId, enabled: boolean): void;
    changeHorizontalGrid(structureId: StructureId, enabled: boolean): void;
    setTheme(structureId: StructureId, theme: SchemaTheme): void;
    setRowColoring(structureId: StructureId, coloring: RowColoring): void;
    changeTopHeader(structureId: StructureId, enabled: boolean): void;
    changeBottomHeader(structureId: StructureId, enabled: boolean): void;
}
