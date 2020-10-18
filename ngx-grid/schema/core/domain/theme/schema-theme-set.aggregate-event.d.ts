import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../api/schema.id';
import { SchemaTheme } from '../../api/schema-theme';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export declare class SchemaThemeSetAggregateEvent extends SchemaAggregateEvent {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    toDomainEvent(): DomainEvent<SchemaId>;
}
