import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../../schema.id';
export declare class SchemaVerticalGridSetEvent extends DomainEvent {
    constructor(schemaId: SchemaId);
}
