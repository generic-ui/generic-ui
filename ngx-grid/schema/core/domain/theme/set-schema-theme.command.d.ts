import { SchemaId } from '../../api/schema.id';
import { SchemaTheme } from '../../api/schema-theme';
import { SchemaCommand } from '../schema.command';
export declare class SetSchemaThemeCommand extends SchemaCommand {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
