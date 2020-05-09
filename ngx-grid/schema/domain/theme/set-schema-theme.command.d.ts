import { Command } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaTheme } from './schema-theme';
export declare class SetSchemaThemeCommand extends Command {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
