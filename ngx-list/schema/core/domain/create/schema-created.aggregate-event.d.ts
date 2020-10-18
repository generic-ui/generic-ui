import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../api/schema.id';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export declare class SchemaCreatedAggregateEvent extends SchemaAggregateEvent {
    constructor(aggregateId: SchemaId);
    toDomainEvent(): DomainEvent<SchemaId>;
}
