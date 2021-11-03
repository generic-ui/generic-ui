import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
import { SchemaTheme } from '../../api/theme/schema-theme';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export declare class SchemaThemeSetAggregateEvent extends SchemaAggregateEvent {
    private readonly theme;
    constructor(schemaId: SchemaId, theme: SchemaTheme);
    toDomainEvent(): DomainEvent<SchemaId>;
}
