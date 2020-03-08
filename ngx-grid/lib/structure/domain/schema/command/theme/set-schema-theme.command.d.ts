import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { SchemaTheme } from '../../schema-theme';
export declare class SetSchemaThemeCommand extends Command {
    private readonly theme;
    constructor(structureId: StructureId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
