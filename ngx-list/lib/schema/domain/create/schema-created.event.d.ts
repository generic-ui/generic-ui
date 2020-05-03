import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
export declare class SchemaCreatedEvent extends DomainEvent<SchemaId> {
    constructor(aggregateId: SchemaId);
}
