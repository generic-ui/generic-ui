import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaTheme } from './schema-theme';
export declare class SchemaThemeSetEvent extends DomainEvent<SchemaId> {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    getTheme(): SchemaTheme;
}
