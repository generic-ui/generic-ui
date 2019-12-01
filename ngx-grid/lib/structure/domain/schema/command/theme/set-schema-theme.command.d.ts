import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { SchemaTheme } from '../../schema-theme';
export declare class SetSchemaThemeCommand extends Command {
    readonly structureId: StructureId;
    readonly theme: SchemaTheme;
    constructor(structureId: StructureId, theme: SchemaTheme);
}
