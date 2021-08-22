import { SchemaDomainEvent } from '../schema.domain-event';
import { SchemaId } from '../schema.id';
export declare class SchemaCreatedEvent extends SchemaDomainEvent {
    constructor(aggregateId: SchemaId);
}
