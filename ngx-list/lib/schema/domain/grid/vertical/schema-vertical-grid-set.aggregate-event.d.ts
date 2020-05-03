import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaVerticalGridSetAggregateEvent extends AggregateEvent<SchemaId> {
    private readonly verticalGrid;
    constructor(schemaId: SchemaId, verticalGrid: boolean);
    toDomainEvent(): DomainEvent<SchemaId>;
}
