import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../structure-id';
import { SchemaTheme } from '../schema-theme';
import { SchemaRowColoring } from '../schema-row-coloring';
export declare class SchemaDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setSchema(structureId: StructureId, height: number): void;
    changeVerticalGrid(structureId: StructureId, enabled: boolean): void;
    changeHorizontalGrid(structureId: StructureId, enabled: boolean): void;
    setTheme(structureId: StructureId, theme: SchemaTheme): void;
    setRowColoring(structureId: StructureId, coloring: SchemaRowColoring): void;
    changeTopHeader(structureId: StructureId, enabled: boolean): void;
    changeBottomHeader(structureId: StructureId, enabled: boolean): void;
}
