import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
export declare class SchemaVerticalGridSetAggregateEvent extends SchemaAggregateEvent {
    private readonly verticalGrid;
    constructor(schemaId: SchemaId, verticalGrid: boolean);
    toDomainEvent(): DomainEvent<SchemaId>;
}
