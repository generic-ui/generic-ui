import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaTheme } from './schema-theme';
export declare class SchemaThemeSetAggregateEvent extends AggregateEvent<SchemaId> {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    toDomainEvent(): DomainEvent<SchemaId>;
}
