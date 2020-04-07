import { DomainEvent } from '@generic-ui/hermes';
import { SchemaId } from '../schema.id';
export declare class RowColoringSetEvent extends DomainEvent {
    constructor(schemaId: SchemaId);
}
