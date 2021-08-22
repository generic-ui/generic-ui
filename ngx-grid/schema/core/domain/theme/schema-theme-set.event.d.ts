import { SchemaId } from '../schema.id';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaDomainEvent } from '../schema.domain-event';
export declare class SchemaThemeSetEvent extends SchemaDomainEvent {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
