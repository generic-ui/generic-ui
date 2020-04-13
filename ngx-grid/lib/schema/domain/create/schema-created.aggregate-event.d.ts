import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
export declare class SchemaCreatedAggregateEvent extends AggregateEvent<SchemaId> {
    constructor(aggregateId: SchemaId);
    toDomainEvent(): DomainEvent<SchemaId>;
}
