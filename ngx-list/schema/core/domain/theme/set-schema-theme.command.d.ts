import { SchemaId } from '../schema.id';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaCommand } from '../schema.command';
export declare class SetSchemaThemeCommand extends SchemaCommand {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
