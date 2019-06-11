import { StructureId } from 'structure/domain/structure-id';
import { SchemaTheme } from 'structure/domain/schema/schema-theme';
import { Command } from 'generic-ui-cqrs';
export declare class SetSchemaThemeCommand extends Command {
    readonly structureId: StructureId;
    readonly theme: SchemaTheme;
    constructor(structureId: StructureId, theme: SchemaTheme);
}
