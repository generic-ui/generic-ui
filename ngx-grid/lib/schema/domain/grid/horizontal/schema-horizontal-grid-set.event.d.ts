import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaHorizontalGridSetEvent extends DomainEvent {
    constructor(schemaId: SchemaId);
}
