import { SchemaId } from '../../api/schema.id';
import { SchemaDomainEvent } from '../schema.domain-event';
export declare class SchemaCreatedEvent extends SchemaDomainEvent {
    constructor(aggregateId: SchemaId);
}
