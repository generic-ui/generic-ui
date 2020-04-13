import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaHorizontalGridSetAggregateEvent extends AggregateEvent<SchemaId> {
    private readonly horizontalGrid;
    constructor(schemaId: SchemaId, horizontalGrid: boolean);
    toDomainEvent(): DomainEvent<SchemaId>;
}
