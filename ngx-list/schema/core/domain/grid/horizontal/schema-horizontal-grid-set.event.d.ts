import { SchemaId } from '../../schema.id';
import { SchemaDomainEvent } from '../../schema.domain-event';
export declare class SchemaHorizontalGridSetEvent extends SchemaDomainEvent {
    private readonly horizontalGrid;
    constructor(schemaId: SchemaId, horizontalGrid: boolean);
    getHorizontalGrid(): boolean;
}
